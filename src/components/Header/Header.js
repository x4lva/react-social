import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import {CustomToggle} from "../DropdownToggle/DropdownToggle";

const Header = () => {
    return (
        <div className="header d-flex">
            <div className="header-logo me-5">
                Raver
            </div>
            <div className="header-menu d-flex justify-content-between w-100">
                <ul className="d-flex">
                    <li className="me-4">
                        <NavLink to={"/"} activeStyle={{fontWeight: "bold"}}>
                            Поиск
                        </NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink to={"/profile/favourites"} activeStyle={{fontWeight: "bold"}}>
                            Избрание
                        </NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink to={"/calendar"} activeStyle={{fontWeight: "bold"}}>
                            Календарь
                        </NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink to={"/profile/tickets"} activeStyle={{fontWeight: "bold"}}>
                            Билеты
                        </NavLink>
                    </li>
                </ul>
                <div className="header-user">
                    <Link to={"/profile"} className={"d-flex align-items-center"}>
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle}>
                                <div className="header-user-info me-2">
                                    Dmytro
                                </div>
                                <div className="header-user-icon">
                                    <i className="far fa-user-circle" />
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    <Link to={"/organisations"}>Організації</Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <Link to={"/profile"}>Профліль</Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <Link to={"/logout"}>Вийти</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;