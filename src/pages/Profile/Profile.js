import React, { Component } from 'react';
import './Profile.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.userAuthenticated)
        console.log(this.props.userLoading)
        console.log(this.props.userData)

        return <h1>Profile</h1>

        if (!this.props.userAuthenticated && !this.props.userLoading){
            return <Redirect to={"/"} />
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
                            <p className="profile-email">Roles: {this.props.userData.roles.map(role => {
                                return (
                                    <div>
                                        {role.name + " => " + role.privileges.map(privilege => {
                                            return privilege.name + " | "
                                        })} <br/>
                                    </div>
                                )
                            })}</p>
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
