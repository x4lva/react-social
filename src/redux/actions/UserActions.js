import {UPDATE_USER_STATE} from "../types/UserTypes";
import {getCurrentUser} from "../../services/User";
import {createOrganisationRequest, subscribeOrganisationRequest} from "../../services/Organisation";
import {setMainState} from "./MainActions";

export const setUserState = (payload) => {
    return {
        type: UPDATE_USER_STATE,
        payload,
    };
};

export const loadUserData = () => (dispatch, getState) => {
    getCurrentUser()
        .then(response => {
            dispatch(setUserState({
                userData: response,
                userAuthenticated: true,
                userLoading: false
            }))
        }).catch(error => {
            dispatch(setUserState({
                userData: {},
                userAuthenticated: false,
                userLoading: false
            }))
    });
};

export const createOrganisation = (data) => (dispatch, getState) => {
    createOrganisationRequest(data)
        .then(response => {
            if (response) {
                dispatch(setUserState({
                    userData: { ...getState().userState.userData, organisations: [...getState().userState.userData.organisations, response] }
                }))
            }
        }).catch(error => {
            console.log(error);
    });
};

export const subscribeOrganisation = (data) => (dispatch, getState) => {
    subscribeOrganisationRequest(data)
        .then(response => {
            if (response) {
                dispatch(setUserState({
                    userData: { ...getState().userState.userData, subscribedOrganisations: [...getState().userState.userData.organisations, response] },
                }))
                if (data === getState().mainState.organisation.id) {
                    dispatch(setMainState({
                        organisation: {...getState().mainState.organisation, subscribers: ["123"]},
                    }))
                }
            }
        }).catch(error => {

        });
};

export const userLogOut = () => (dispatch, getState) => {
    dispatch(setUserState({
        userAuthenticated: false,
        userData: null
    }))
};

export const setCreateOrganisationModalShow = (value) => (dispatch, getState) => {
    dispatch(setUserState({
        createOrganisationModalShow: value
    }))
};