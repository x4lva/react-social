import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import OAuth2RedirectHandler from "../util/OAuth2/OAuth2RedirectHandler";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import {connect} from "react-redux";
import {loadUserData, userLogOut} from "../redux/actions/UserActions";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadUserData();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.userAuthenticated !== this.props.userAuthenticated) {
            this.props.userAuthenticated = nextProps.userAuthenticated;
        }
    }

    render() {
        return (
            <BrowserRouter>

                <div className="app">
                    <div className="app-top-box">
                        <AppHeader authenticated={this.props.userAuthenticated} onLogout={this.props.userLogOut}/>
                    </div>
                    <div className="app-body">
                        <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/signup" component={Signup}/>
                            <Route exact path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                            <Route path="/profile" component={Profile}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Alert stack={{limit: 3}}
                           timeout={3000}
                           position='top-right' effect='slide' offset={65}/>
                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userState.userData,
        userAuthenticated: state.userState.userAuthenticated
    };
};

const mapDispatchToProps = {
    userLogOut,
    loadUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
