import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./AppHeader.css"

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class AppHeader extends Component {
    render() {
        return (
            <header>
                <nav className={"app-header-container"}>
                    <ul className={"app-header"}>
                        <li className={"app-header-item"}>

                        </li>
                        <li className={"app-header-item"}>

                        </li>
                        <li className={"app-header-item"}>

                        </li>
                        <li className={"app-header-item"}>

                        </li>
                        <li className={"app-header-item"}>

                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader);