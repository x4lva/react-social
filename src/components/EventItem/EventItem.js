import React from 'react';
import "./EventItem.css"

const EventItem = (props) => {

    const eventBg = `url("${props.img}")`

    return (
        <div className="event-item">
            <div className="event-item-img" style={{backgroundImage: eventBg}}>

            </div>
            <div className="event-author my-2">
                <div className="event-author-img border">
                    K
                </div>
                <div className="event-author-name">
                    International Koshiki Karate Federation
                </div>
            </div>
            <div className="event-item-content">
                <div className="event-item-title">
                    Кубок Чёрного моря по Косики каратэ IKKF 2021
                </div>
                <div className="event-item-date">
                    15 Октября 09:00 - 18:00
                </div>
            </div>
        </div>
    );
};

export default EventItem;