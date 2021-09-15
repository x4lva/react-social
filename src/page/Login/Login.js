import React, {Component, useEffect} from 'react';
import './Login.css';
import { GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Redirect } from 'react-router-dom'
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';
import {useDispatch} from "react-redux";
import {setLoginModalShow, setSignupModalShow} from "../../redux/actions/MainActions";

const Login = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if(props.location.state && props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    })

    if(props.authenticated) {
        return <Redirect
            to={{
            pathname: "/",
            state: { from: props.location }
        }}/>;
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <SocialLogin />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm {...props} />
                <span className="signup-link">New user? <div onClick={() => {
                    dispatch(setSignupModalShow(true))
                    dispatch(setLoginModalShow(false))
                }}>Sign up!</div></span>
            </div>
        </div>
    );
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-dark" href={GITHUB_AUTH_URL}>
                    <img width={30} src={githubLogo} alt="Github" className={"me-2"}/>Log in with Github
                </a>
            </div>
        );
    }
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            this.props.history.push("/");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>                    
        );
    }
}

export default Login
