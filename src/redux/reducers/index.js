import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
  videoByIdReducer,
  videosReducer,
  relatedVideosReducer,
  searchVideosReducer,
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
  searchVideos: searchVideosReducer,
});

export default reducers;
