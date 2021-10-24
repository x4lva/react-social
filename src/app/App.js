import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.scss';
import {loadUserData, userLogOut} from "../redux/actions/UserActions";
import {connect} from "react-redux";
import Home from "../page/Home/Home";
import Profile from "../page/Profile/Profile";
import Calendar from "../page/Calendar/Calendar";
import EventDetails from "../page/Event/Event";
import Organisations from "../page/Organisations/Organisations";
import OAuth2RedirectHandler from "../util/OAuth2/OAuth2RedirectHandler";
import Login from "../page/Login/Login";
import Organisation from "../page/Organisation/Organisation";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadUserData();
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
                            <Route exact path={"/login"} component={Login} />
                            <Route exact path={"/profile"} component={Profile} />
                            <Route exact path={"/profile/tickets"} component={Profile} />
                            <Route exact path={"/profile/favourites"} component={Profile} />
                            <Route exact path={"/calendar"} component={Calendar} />
                            <Route exact path={"/organisations"} component={Organisations} />
                            <Route path={"/organisation/:organisationId"} component={Organisation} />
                            <Route path={"/event/:eventId"} component={EventDetails} />
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