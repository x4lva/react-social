import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { Redirect } from 'react-router-dom'
import {loadUserData, userLogOut} from "../../redux/actions/UserActions";
import {connect} from "react-redux";

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            this.props.loadUserData()

            return <Redirect to={{
                pathname: "/",
                state: {from: this.props.location}
            }}/>;
        } else {
            return <Redirect to={{
                pathname: "/",
                state: {
                    from: this.props.location,
                    error: error
                }
            }}/>;
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(OAuth2RedirectHandler);