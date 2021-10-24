import React, {useEffect, useState} from 'react';
import {ACCESS_TOKEN} from "../../constants";
import {Redirect} from "react-router-dom";
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import {useDispatch, useSelector} from "react-redux";
import {setCreateOrganisationModalShow} from "../../redux/actions/UserActions";
import OrganisationCreate from "../../components/Organisation/OrganisationCreate/OrganisationCreate";
import OrganisationItem from "../../components/Organisation/OrganisationItem/OrganisationItem";
import "./Organisations.scss"

const Organisations = () => {
    const dispatch = useDispatch();

    const userData = useSelector(state => state.userState.userData)

    const createOrganisationModalShow = useSelector(state => state.userState.createOrganisationModalShow)

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

                { userData.organisations?.length === 0 ? (<div className={"mt-2"}>У вас немає створених організацій</div>) : (
                    <div className="organisation-list g-4 row mt-2">
                        {userData.organisations.map((item) => {
                            return <div className={"col-3"}><OrganisationItem key={item.id} data={item} /></div>
                        })}
                    </div>
                )}

            <ModalWrapper
                contentClassName={"p-1"}
                dialogClassName={"p-5"}
                show={createOrganisationModalShow}
                onHide={() => dispatch(setCreateOrganisationModalShow(false))}
                component={<OrganisationCreate />}/>
        </HeaderWrapper>
    );
};

export default Organisations;