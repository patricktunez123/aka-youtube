import req from "../../../api";
import {
  videoActionTypes,
  videoByIdActionTypes,
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
