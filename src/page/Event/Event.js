import React from 'react';
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";
import "./Event.css"
import {Carousel} from "react-bootstrap";
const EventDetails = () => {

    const eventBanner = `url("https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`

    return (
        <HeaderWrapper>
            <div className="event-header pb-4">
                Кубок Чёрного моря по Косики каратэ IKKF 2021
            </div>
            <div className="event d-flex justify-content-between ">
                <div className="event-info col-3 d-flex flex-column">
                    <div className="event-info-date d-flex mb-4">
                        <div className="event-info-date-icon border">
                            <div className="event-info-date-icon-mounth border-bottom">
                                ОКТ
                            </div>
                            <div className="event-info-date-icon-day">
                                9
                            </div>
                        </div>
                        <div className="event-info-date-content">
                            <div className="event-info-date-to">
                                Через неделю
                            </div>
                            <div className="event-info-date-day">
                                9 октября 12:00
                            </div>
                            <div className="event-info-date-during">
                                Продолжительность не указана
                            </div>
                        </div>
                    </div>

                    <div className="event-info-location d-flex mb-4">
                        <div className="event-info-location-icon border">
                            <div className="event-info-location-icon-dec">
                            </div>
                        </div>
                        <div className="event-info-date-content">
                            <div className="event-info-date-to">
                                Львів
                            </div>
                            <div className="event-info-date-day">
                                Парк Івана Франка
                            </div>
                            <div className="event-info-date-during">
                                Карта и схема проезда
                            </div>
                        </div>
                    </div>

                    <div className="event-info-location d-flex mb-5">
                        <div className="event-info-location-icon border">
                            <div className="event-info-author">
                                K
                            </div>
                        </div>
                        <div className="event-info-date-content">
                            <div className="event-info-date-to">
                                Організатор
                            </div>
                            <div className="event-info-date-day">
                                Забег "Лапки в охапке"
                            </div>
                            <div className="event-info-date-during">
                                Иформация об организаторе
                            </div>
                        </div>
                    </div>

                    <div className="event-ticket shadow">
                        <div className="event-ticket-button">
                            Получить билеты
                        </div>
                    </div>
                </div>
                <div id="carouselExampleInterval" className="carousel slide ps-3" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000" style={{backgroundImage: eventBanner}}>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000" style={{backgroundImage: eventBanner}}>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000" style={{backgroundImage: eventBanner}}>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="event-description mt-5 d-flex">
                <p className={"w-75"}>
                    «МК в Питере» приглашает бегунов и любителей животных 9 октября в 16:00 на офлайн забег «Лапки в охапке». <br/> <br/>

                    «МК в Питере» организуют офлайн (до 75 человек) забег с домашними животными для своих читателей и всех желающих. <br/> <br/>

                    Сама редакция, ее друзья, партнеры и активные горожане соберутся на офлайн забег «Лапки в охапке». Все участники бегут одну и ту же дистанцию 2 км. Все они попадают в единый протокол забега. Здоровый образ жизни - это счастливый образ жизни.А счастливый образ жизни трудно представить без любимых питомцев: именно они помогают нам испытывать нежные чувства, радоваться, заботиться и отдыхать. Мы решили организовать мероприятие, где каждый может выйти на пробежку в честь любимого питомца.
                </p>
                <div className="w-25 ms-5 min-vh-100 border rounded bg-light"></div>
            </div>

        </HeaderWrapper>
    );
};

export default EventDetails;