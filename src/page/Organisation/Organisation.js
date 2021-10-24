import React, {useEffect} from 'react';
import {ACCESS_TOKEN} from "../../constants";
import {Redirect} from "react-router-dom";
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import {useDispatch, useSelector} from "react-redux";
import {getOrganisation} from "../../redux/actions/MainActions";

const Organisation = (props) => {
    const dispatch = useDispatch()

    const organisation = useSelector(state => state.mainState.organisation)
    const organisationLoading = useSelector(state => state.mainState.organisationLoading)

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

    return (
        <HeaderWrapper>
            <SectionHeader title={`${ organisationLoading ? "Loading" : organisation?.name }`} />
        </HeaderWrapper>
    );
};

export default Organisation;