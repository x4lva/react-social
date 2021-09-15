import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/UserReducer";
import mainReducer from "./reducers/MainReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    mainState: mainReducer
});

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;