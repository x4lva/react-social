import {UPDATE_MAIN_STATE} from "../types/MainTypes";
import {getOrganisationRequest} from "../../services/Organisation";

export const setMainState = (payload) => {
    return {
        type: UPDATE_MAIN_STATE,
        payload,
    };
};

export const setLoginModalShow = (value) => (dispatch, getState) => {
    dispatch(setMainState({
        loginModalShow: value
    }))
};

export const setSignupModalShow = (value) => (dispatch, getState) => {
    dispatch(setMainState({
        signupModalShow: value
    }))
};

export const getOrganisation = (value) => (dispatch, getState) => {
    dispatch(setMainState({
        organisationLoading: true
    }))
    getOrganisationRequest(value)
        .then(res => {
            dispatch(setMainState({
                organisation: res
            }))
            dispatch(setMainState({
                organisationLoading: false
            }))
        })
        .catch(err => {
            console.error(err)
            dispatch(setMainState({
                organisationLoading: false
            }))
        })
};