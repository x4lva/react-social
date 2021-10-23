import React, {Fragment} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./HeaderWrapper.scss"
import {Dropdown} from "react-bootstrap";
import {CustomToggle} from "../DropdownToggle/DropdownToggle";
import Header from "../Header/Header";

const HeaderWrapper = (props) => {
    return (
        <Fragment>
            <header className="app-header header-wrapper">
                <div className="container d-flex flex-column py-3 h-100 justify-content-between">
                    <Header />
                </div>
            </header>
            <main>
                <div className="container mt-4">
                    {props.children}
                </div>
            </main>
        </Fragment>
    );
};

export default HeaderWrapper;