import {UPDATE_MAIN_STATE} from "../types/MainTypes";

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