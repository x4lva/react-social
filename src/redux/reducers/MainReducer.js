import { UPDATE_MAIN_STATE } from "../types/MainTypes";

const initialState = {
    loginModalShow: false,
    signupModalShow: false,
    organisation: {},
    organisationLoading: false
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MAIN_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default mainReducer;