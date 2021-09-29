import React from 'react';
import "./EventItem.css"

const EventItem = (props) => {

    const eventBg = `url("${props.img}")`

    return (
        <div className="event-item shadow" style={{backgroundImage: eventBg}}>
            <div className="event-item-content">
                <div className="event-item-title">
                    Dimensions 2021
                </div>
                <div className="event-item-date">
                    <i className="fas fa-calendar-alt" />
                    15 October 2021
                </div>
            </div>
        </div>
    );
};

export default EventItem;