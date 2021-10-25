import React, {useEffect} from 'react';
import {ACCESS_TOKEN} from "../../constants";
import {Redirect} from "react-router-dom";
import HeaderWrapper from "../../components/Wrappers/HeaderWrapper/HeaderWrapper";
import SectionHeader from "../../components/Section/SectionHeader/SectionHeader";
import {useDispatch, useSelector} from "react-redux";
import {getOrganisation} from "../../redux/actions/MainActions";
import OrganisationLogo from "../../components/Organisation/OrganisationLogo/OrganisationLogo";
import "./Organisation.scss"
import Button from "../../components/Layout/Button/Button";
import {Tab, Tabs} from "react-bootstrap";
import EventItem from "../../components/Event/EventItem/EventItem";
import {subscribeOrganisation} from "../../redux/actions/UserActions";


const Organisation = (props) => {
    const dispatch = useDispatch()

    const organisation = useSelector(state => state.mainState.organisation)
    const organisationLoading = useSelector(state => state.mainState.organisationLoading)
    const userID = useSelector(state => state.userState.userData?.id)

    useEffect(() => {
        dispatch(getOrganisation(props.match.params.organisationId))
    }, [])

    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return <Redirect to={"/"}/>
    }

    if (organisationLoading) {
        return "Loading";
    }

    if (organisation?.name === undefined) {
        return "Organisation not found"
    }

    console.log(organisation)

    return (
        <HeaderWrapper>
            <div className="organisation-header pb-3 border-bottom">
                <div className="organisation-header-content">
                    <OrganisationLogo size={130} organisation={organisation} />
                    <div className="organisation-header-info  mb-2 ms-3">
                        <div className="organisation-header-info-item">
                            <span>{organisation.subscribers.length}</span> слідкувача<i className="fas fa-circle"></i>
                        </div>
                        <div className="organisation-header-info-item">
                            <span>6</span> подій<i className="fas fa-circle"></i>
                        </div>
                        <div className="organisation-header-info-item">
                            <span>10</span> новин
                        </div>
                    </div>
                </div>
                <div className="organisation-header-actions">
                    <Button onClick={() => dispatch(subscribeOrganisation(organisation.id))} variant={"primary"} style={{fontSize: 16}}>
                        Слідкувати
                    </Button>
                    <Button className={"ms-2"} style={{fontSize: 16}} variant={"transparent"}>
                        <i className="far fa-share-square"></i>
                    </Button>
                    { organisation.author.id === userID && (
                        <Button className={"ms-2"} style={{fontSize: 16}} variant={"transparent"}>
                            <i className="fas fa-ellipsis-h"></i>
                        </Button>
                    ) }
                </div>
            </div>
            <div className={"organisation-title"}>
                {organisation.name}
            </div>
            <div className="organisation-description">
                {organisation.description}
            </div>
            <Tabs defaultActiveKey="events" className="mt-3" id={"organisation-tabs"}>
                <Tab tabClassName={"organisation-tab"} eventKey="events" title="Події">
                    <div className="organisation-tabs-events">
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                        <EventItem img={"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
                    </div>
                </Tab>
                <Tab tabClassName={"organisation-tab"} eventKey="news" title="Новини">
                    321
                </Tab>
                <Tab tabClassName={"organisation-tab"} eventKey="reviews" title="Відгуки">
                    4324
                </Tab>
            </Tabs>
        </HeaderWrapper>
    );
};

export default Organisation;