import React, {useEffect, useState} from 'react';
import {ACCESS_TOKEN} from "../../constants";
import {Redirect} from "react-router-dom";
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import {useDispatch, useSelector} from "react-redux";
import {setCreateOrganisationModalShow} from "../../redux/actions/UserActions";
import OrganisationCreate from "../../components/Organisation/OrganisationCreate/OrganisationCreate";

const Organisations = () => {

    const dispatch = useDispatch();
    const createOrganisationModalShow = useSelector(state => state.userState.createOrganisationModalShow)

    const [organisationsLoading, setOrganisationsLoading] = useState(true);
    const organisations = [
        {
            name: "Lviv Storts",
            id: "123"
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setOrganisationsLoading(false);
        }, 1500)
    }, [])

    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return <Redirect to={"/"}/>
    }

    return (
        <HeaderWrapper>
            <SectionHeader title={"Організації"} content={
                <div className={"btn btn-primary"} onClick={() => dispatch(setCreateOrganisationModalShow(true))}>
                    Створити організацію
                </div>
            }/>
            {organisationsLoading ? ("Завантаження") : organisations.length == 0 ? "У вас немає створених організацій" : (
                organisations.map((item) => {
                    return <div className={"col-4"} key={item.id}>{item.name}</div>
                })
            )}
            <ModalWrapper
                size={"sm"}
                show={createOrganisationModalShow}
                onHide={() => dispatch(setCreateOrganisationModalShow(false))}
                component={<OrganisationCreate />}/>
        </HeaderWrapper>
    );
};

export default Organisations;