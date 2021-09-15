import { UPDATE_USER_STATE } from "../types/UserTypes";

const initialState = {
    userData: {
        roles: []
    },
    userAuthenticated: false,
    userLoading: true
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;