import React, {Component, useEffect, useState} from 'react';
import './Login.css';
import { GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Redirect } from 'react-router-dom'
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';
import {useDispatch} from "react-redux";
import {setLoginModalShow, setSignupModalShow} from "../../redux/actions/MainActions";
import {setUserState} from "../../redux/actions/UserActions";

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
                <SocialLogin />
                <div className="or-separator text-center my-2">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm {...props} />
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


const LoginForm = (props) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        switch (inputName){
            case "password":
                setPassword(inputValue)
                break
            case "email":
                setEmail(inputValue)
                break
        }
    }

    function handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, {email, password});

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            props.history.push("/");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input type="email" name="email"
                    className="form-control" placeholder="Email"
                    value={email} onChange={handleInputChange} required/>
            </div>
            <div className="form-item mt-2">
                <input type="password" name="password"
                    className="form-control" placeholder="Password"
                    value={password} onChange={handleInputChange} required/>
            </div>
            <div className="form-item col-12 d-flex justify-content-between mt-3">
                <button type="submit" className="btn btn-block btn-primary col-7">Login</button>
                <button onClick={() => {
                    dispatch(setSignupModalShow(true))
                    dispatch(setLoginModalShow(false))
                }} className="btn btn-block btn-dark col-4">Sign up</button>
            </div>
        </form>
    );
}

export default Login
