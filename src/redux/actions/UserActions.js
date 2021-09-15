import {UPDATE_USER_STATE} from "../types/UserTypes";
import {getCurrentUser} from "../../services/user";
import {ACCESS_TOKEN} from "../../constants";

export const setUserState = (payload) => {
    return {
        type: UPDATE_USER_STATE,
        payload,
    };
};

export const loadUserData = () => (dispatch, getState) => {
    console.log("LOAD")
    getCurrentUser()
        .then(response => {
            dispatch(setUserState({
                userData: {...response},
                userAuthenticated: true,
                userLoading: false
            }))
        }).catch(error => {
            console.log(error)
            dispatch(setUserState({
                userData: {},
                userAuthenticated: false,
                userLoading: false
            }))
    });
};

export const userLogOut = () => (dispatch, getState) => {
    localStorage.removeItem(ACCESS_TOKEN);
    dispatch(setUserState({
        userAuthenticated: false,
        userData: {}
    }))
};


