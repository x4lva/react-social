import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import {loadUserData, userLogOut} from "../redux/actions/UserActions";
import {connect} from "react-redux";
import OAuth2RedirectHandler from "../util/oauth2/OAuth2RedirectHandler";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";
import Profile from "../page/Profile/Profile";
import Calendar from "../page/Calendar/Calendar";

class App extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        this.props.loadUserData();
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.props.userLogOut()
        Alert.success("You're safely logged out!");
    }

    render() {
        if (this.props.userLoading === true) {
            return "";
        }

        return (
            <BrowserRouter>
                <div className="app">
                    <div className="app-body">
                        <Switch>
                            <Route exact path={"/"} component={Home} />
                            <Route exact path={"/profile"} component={Profile} />
                            <Route exact path={"/profile/tickets"} component={Profile} />
                            <Route exact path={"/profile/favourites"} component={Profile} />
                            <Route exact path={"/calendar"} component={Calendar} />
                            <Route exact path={"/oauth2/redirect"} component={OAuth2RedirectHandler} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userState.userData,
        userAuthenticated: state.userState.userAuthenticated,
        userLoading: state.userState.userLoading
    };
};

const mapDispatchToProps = {
    userLogOut,
    loadUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);