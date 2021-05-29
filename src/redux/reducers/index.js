import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
  videoByIdReducer,
  videosReducer,
  relatedVideosReducer,
  searchVideosReducer,
  subscriptionsVideosReducer,
  channelVideosReducer,
} from "./videosReducer";
import { getChannelReducer } from "./channelReducer";
import { commentsReducer } from "./commentsReducer";

const reducers = combineReducers({
  auth: authReducer,
  videosReducer,
  videoByIdReducer,
  getChannelReducer,
  commentsList: commentsReducer,
  relatedVideos: relatedVideosReducer,
  searchVideos: searchVideosReducer,
  subscriptionsVideos: subscriptionsVideosReducer,
  channelVideos: channelVideosReducer,
});

export default reducers;
