import React, { Component } from 'react';
import './Profile.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ACCESS_TOKEN} from "../../constants";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            return <Redirect  to={"/"}/>
        }

        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.userData.imageUrl ? (
                                    <img src={this.props.userData.imageUrl} alt={this.props.userData.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.userData.name && this.props.userData.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.userData.name}</h2>
                           <p className="profile-email">{this.props.userData.email}</p>
                        </div>
                    </div>
                </div>    
            </div>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
