import React, {Fragment} from 'react';
import './Home.css';
import {ACCESS_TOKEN} from "../../constants";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import Login from "../Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {setLoginModalShow, setSignupModalShow} from "../../redux/actions/MainActions";
import Signup from "../Signup/Signup";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import {Link, NavLink} from "react-router-dom";
import Header from "../../components/Header/Header";
import EventItem from "../../components/EventItem/EventItem";
import CompilationSection from "../../components/СompilationSection/CompilationSection";
import RecommendationSection from "../../components/RecommendationSection/RecommendationSection";
import ThemeSection from "../../components/ThemeSection/ThemeSection";

const Home = (props) => {
    const dispatch = useDispatch()
    const loginModalShow = useSelector(state => state.mainState.loginModalShow)
    const signupModalShow = useSelector(state => state.mainState.signupModalShow)

    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return (
            <Fragment>
                <div className={"min-vh-100 primary-bg"}>
                    <header className={"d-flex"}>
                        <div className="container d-flex justify-content-between py-3">
                            <div className="header-logo me-5">
                                Raver
                            </div>
                            <nav className={"home-container-nav"}>
                                <ul className={"d-flex align-items-center m-0 p-0 h-100"}>
                                    <li onClick={() => dispatch(setLoginModalShow(true))}
                                        className={"btn btn-sm"}>
                                        Sing in
                                    </li>
                                    <li onClick={() => dispatch(setSignupModalShow(true))}
                                        className={"btn btn-sm"}>
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
                </div>

                <ModalWrapper
                    size={"sm"}
                    show={loginModalShow}
                    onHide={() => dispatch(setLoginModalShow(false))}
                    component={<Login {...props} />}/>
                <ModalWrapper
                    size={"sm"}
                    show={signupModalShow}
                    onHide={() => dispatch(setSignupModalShow(false))}
                    component={<Signup {...props} />}/>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <header className="app-header">
                <div className="container d-flex flex-column py-3 h-100 justify-content-between">
                    <Header />
                    <div className="search-form shadow">
                        <form action="" className="d-flex justify-content-between col-12">
                            <div className="form-option d-flex col-10">
                                <input className="simple-input col-4" type="text"
                                       placeholder="Поиск по названию или типу..."/>
                                <div className="form-separator"/>
                                <div className="form-item col-2">
                                    <i className="form-item-icon fas fa-calendar-alt"/>
                                    <div className="form-item-content">
                                        Дата
                                    </div>
                                </div>
                                <div className="form-separator"/>
                                <div className="form-item col-2">
                                    <i className="form-item-icon fas fa-map-marker-alt"/>
                                    <div className="form-item-content">
                                        Локація
                                    </div>
                                </div>
                                <div className="form-separator"/>
                                <div className="form-item col-2">
                                    <i className="form-item-icon fas fa-th"/>
                                    <div className="form-item-content">
                                        Тип
                                    </div>
                                </div>
                            </div>
                            <div className="form-action col-2">
                                <button className="search-form-submit" type="submit">Поиск</button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
            <main>
                <div className="container mt-5">
                    <RecommendationSection/>
                </div>
                <CompilationSection />
                <div className="container mt-5">
                    <div className={"d-flex flex-wrap feed"}>
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                    </div>
                </div>
                <div className="container mt-5">
                    <ThemeSection/>
                </div>
            </main>
        </Fragment>
    )
}

export default Home;