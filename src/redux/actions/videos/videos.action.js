import req from "../../../api";
import {
  videoActionTypes,
  videoByIdActionTypes,
  relatedVideosActionTypes,
  searchVideosActionTypes,
  subscribeVideosActionTypes,
  channelVideosActionTypes,
} from "../../constraints/actionTypes";

export const getVideos = () => async (dispatch, getState) => {
  dispatch({
    type: videoActionTypes.HOME_VIDEO_REQUEST,
  });

  try {
    const { data } = await req.get("videos/", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 20,
        pageToken: getState().videosReducer.nextPageToken,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: videoActionTypes.HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    dispatch({
      type: videoActionTypes.HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  dispatch({
    type: videoActionTypes.HOME_VIDEO_REQUEST,
  });

  try {
    const { data } = await req.get("search/", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().videosReducer.nextPageToken,
        q: keyword,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: videoActionTypes.HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    dispatch({
      type: videoActionTypes.HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: videoByIdActionTypes.GET_VIDEO_BY_ID_REQUEST,
    });

    const { data } = await req.get("videos/", {
      params: {
        part: "snippet, statistics",
        id: id,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: videoByIdActionTypes.GET_VIDEO_BY_ID_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: videoByIdActionTypes.GET_VIDEO_BY_ID_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: relatedVideosActionTypes.RELATED_VIDEOS_REQUEST,
    });

    const { data } = await req.get("search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: relatedVideosActionTypes.RELATED_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: relatedVideosActionTypes.RELATED_VIDEOS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getSearchedVideos = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: searchVideosActionTypes.SEARCH_VIDEOS_REQUEST,
    });

    const { data } = await req.get("search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video, channel",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: searchVideosActionTypes.SEARCH_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: searchVideosActionTypes.SEARCH_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getSubscribeVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: subscribeVideosActionTypes.SUBSCRIBE_VIDEOS_REQUEST,
    });

    const { data } = await req.get("subscriptions", {
      params: {
        part: "snippet,contentDetails",
        mine: true,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: subscribeVideosActionTypes.SUBSCRIBE_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: subscribeVideosActionTypes.SUBSCRIBE_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: channelVideosActionTypes.CHANNEL_VIDEOS_REQUEST,
    });

    //GET THE ID FOR PLAY LIST
    const {
      data: { items },
    } = await req.get("channels", {
      params: {
        part: "contentDetails",
        id: id,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    const uploadedPlaylist = items[0].contentDetails.relatedPlaylists.uploads;

    //GET THE PLAY LIST FOR THE ABOVE ID
    const { data } = await req.get("playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadedPlaylist,
        maxResults: 30,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: channelVideosActionTypes.CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: channelVideosActionTypes.CHANNEL_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
