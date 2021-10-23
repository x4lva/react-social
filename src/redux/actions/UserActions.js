import {UPDATE_USER_STATE} from "../types/UserTypes";
import {getCurrentUser} from "../../util/APIUtils";

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
                userData: {...response},
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