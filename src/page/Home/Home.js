import React, {Fragment} from 'react';
import './Home.css';
import {ACCESS_TOKEN} from "../../constants";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import Login from "../Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalShow, setSignupModalShow} from "../../redux/actions/MainActions";
import Signup from "../Signup/Signup";

const Home = (props) => {
    const dispatch = useDispatch()
    const loginModalShow = useSelector(state => state.mainState.loginModalShow)
    const signupModalShow = useSelector(state => state.mainState.signupModalShow)

    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return (
            <Fragment>
                <header className={"d-flex primary-bg"}>
                    <div className="container d-flex justify-content-between py-3">
                        <div className={"home-container-logo fw-bolder text-white lh-sm"}>
                            Flexity
                        </div>
                        <nav className={"home-container-nav"}>
                            <ul className={"d-flex align-items-center m-0 p-0 h-100"}>
                                <li onClick={() => dispatch(setLoginModalShow(true))} className={"btn btn-sm btn-primary"}>
                                    Sing in
                                </li>
                                <li onClick={() => dispatch(setSignupModalShow(true))} className={"btn btn-sm btn-dark"}>
                                    Sing up
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className="container secondary-bg">

                    </div>
                </main>
                <ModalWrapper
                    show={loginModalShow}
                    onHide={() => dispatch(setLoginModalShow(false))}
                    component={<Login {...props} />} />
                <ModalWrapper
                    show={signupModalShow}
                    onHide={() => dispatch(setSignupModalShow(false))}
                    component={<Signup {...props} />} />
            </Fragment>
        )
    }

    return (
        <div className="container">

        </div>
    )
}

export default Home;