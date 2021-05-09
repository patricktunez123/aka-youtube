import req from "../../../api";
import { videoActionTypes } from "../../constraints/actionTypes";

export const getVideos = () => async (dispatch) => {
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
        pageToken: "",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: videoActionTypes.HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    dispatch({
      type: videoActionTypes.HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
