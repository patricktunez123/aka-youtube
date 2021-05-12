import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { videoByIdReducer, videosReducer } from "./videosReducer";
import { getChannelReducer } from "./channelReducer";
import { commentsReducer } from "./commentsReducer";

const reducers = combineReducers({
  user: authReducer,
  videosReducer,
  videoByIdReducer,
  getChannelReducer,
  commentsList: commentsReducer,
});

export default reducers;
