import React from 'react';
import "./PopularEvents.css"
import SectionHeader from "../SectionHeader/SectionHeader";
import ScrollContainer from "react-indiana-drag-scroll";
import EventItem from "../EventItem/EventItem";

const PopularEvents = () => {
    return (
        <div className="d-flex flex-column mt-4">
            <SectionHeader title="Most Popular Events" />
            <ScrollContainer
                vertical={false}
                horizontal={true}
                stopPropagation={true}
                className="scroll-container"
            >

                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />

            </ScrollContainer>
        </div>
    );
};

export default PopularEvents;