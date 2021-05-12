import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { videoByIdReducer, videosReducer } from "./videosReducer";
import { getChannelReducer } from "./channelReducer";

const reducers = combineReducers({
  user: authReducer,
  videosReducer,
  videoByIdReducer,
  getChannelReducer,
});

export default reducers;
