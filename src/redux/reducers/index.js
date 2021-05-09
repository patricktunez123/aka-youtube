import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import videosReducer from "./videosReducer";

const reducers = combineReducers({ user: authReducer, videosReducer });

export default reducers;
