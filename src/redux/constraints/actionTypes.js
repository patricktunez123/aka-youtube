export const authActionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOAD_PROFILE: "LOAD_PROFILE",
  LOGOUT: "LOGOUT",
};

export const videoActionTypes = {
  HOME_VIDEO_SUCCESS: "HOME_VIDEO_SUCCESS",
  HOME_VIDEO_FAIL: "HOME_VIDEO_FAIL",
  HOME_VIDEO_REQUEST: "HOME_VIDEO_REQUEST",
};

export const videoByIdActionTypes = {
  GET_VIDEO_BY_ID_SUCCESS: "GET_VIDEO_BY_ID_SUCCESS",
  GET_VIDEO_BY_ID_FAIL: "GET_VIDEO_BY_ID_FAIL",
  GET_VIDEO_BY_ID_REQUEST: "GET_VIDEO_BY_ID_REQUEST",
};

export const channelDetailsActionTypes = {
  GET_CHANNEL_DETAILS_SUCCESS: "GET_CHANNEL_DETAILS_SUCCESS",
  GET_CHANNEL_DETAILS_FAIL: "GET_CHANNEL_DETAILS_FAIL",
  GET_CHANNEL_DETAILS_REQUEST: "GET_CHANNEL_DETAILS_REQUEST",
};

export const subscriptionActionTypes = {
  SET_SUBSCRIPTION_STATUS: "SET_SUBSCRIPTION_STATUS",
};

export const commentActionTypes = {
  COMMENT_LIST_SUCCESS: "COMMENT_LIST_SUCCESS",
  COMMENT_LIST_FAIL: "COMMENT_LIST_FAIL",
  COMMENT_LIST_REQUEST: "COMMENT_LIST_REQUEST",
};

export const addCcommentActionTypes = {
  ADD_COMMENT_SUCCESS: "ADD_COMMENT_SUCCESS",
  ADD_COMMENT_FAIL: "ADD_COMMENT_FAIL",
};

export const relatedVideosActionTypes = {
  RELATED_VIDEOS_REQUEST: "RELATED_VIDEOS_REQUEST",
  RELATED_VIDEOS_SUCCESS: "RELATED_VIDEOS_SUCCESS",
  RELATED_VIDEOS_FAIL: "RELATED_VIDEOS_FAIL",
};

export const searchVideosActionTypes = {
  SEARCH_VIDEOS_REQUEST: "SEARCH_VIDEOS_REQUEST",
  SEARCH_VIDEOS_SUCCESS: "SEARCH_VIDEOS_SUCCESS",
  SEARCH_VIDEOS_FAIL: "SEARCH_VIDEOS_FAIL",
};
