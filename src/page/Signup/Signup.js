import React, {Component, useState} from 'react';
import './Signup.scss';
import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../constants';
import { signup } from '../../util/APIUtils';
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';
import {useDispatch} from "react-redux";
import {setLoginModalShow, setSignupModalShow} from "../../redux/actions/MainActions";

const Signup = (props) => {
    const dispatch = useDispatch();

    if(props.authenticated) {
        return <Redirect
            to={{
            pathname: "/",
            state: { from: props.location }
        }}/>;
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <SocialSignup />
                <div className="or-separator my-2 text-center">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm {...props} />
            </div>
        </div>
    );
}


class SocialSignup extends Component {
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

const SignupForm = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    function handleSubmit(event) {
        event.preventDefault();   

        const signUpRequest = Object.assign({}, {name, email, password});

        signup(signUpRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
            props.history.push("/login");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item mb-2">
                <input type="text" name="name"
                    className="form-control" placeholder="Name"
                    value={name} onChange={handleInputChange} required/>
            </div>
            <div className="form-item mb-2">
                <input type="email" name="email"
                    className="form-control" placeholder="Email"
                    value={email} onChange={handleInputChange} required/>
            </div>
            <div className="form-item mb-2">
                <input type="password" name="password"
                    className="form-control" placeholder="Password"
                    value={password} onChange={handleInputChange} required/>
            </div>
            <div className="form-item col-12 d-flex justify-content-between">
                <button type="submit" className="btn btn-block btn-primary col-7">Sign Up</button>
                <button type="submit" onClick={ () => {
                    dispatch(setLoginModalShow(true))
                    dispatch(setSignupModalShow(false))
                }} className="btn btn-block btn-dark col-4">Log in</button>
            </div>
        </form>

    );

}

export default Signup