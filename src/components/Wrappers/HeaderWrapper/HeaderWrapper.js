import React, {Fragment} from 'react';
import "./HeaderWrapper.scss"
import Header from "../../Layout/Header/Header";

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