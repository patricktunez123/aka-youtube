import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
  videoByIdReducer,
  videosReducer,
  relatedVideosReducer,
} from "./videosReducer";
import { getChannelReducer } from "./channelReducer";
import { commentsReducer } from "./commentsReducer";

const reducers = combineReducers({
  user: authReducer,
  videosReducer,
  videoByIdReducer,
  getChannelReducer,
  commentsList: commentsReducer,
  relatedVideos: relatedVideosReducer,
});

export default reducers;
