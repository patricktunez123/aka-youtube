import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { videoByIdReducer, videosReducer } from "./videosReducer";

const reducers = combineReducers({
  user: authReducer,
  videosReducer,
  videoByIdReducer,
});

export default reducers;
