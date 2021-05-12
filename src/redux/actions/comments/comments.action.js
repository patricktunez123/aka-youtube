import { commentActionTypes } from "../../constraints/actionTypes";
import req from "../../../api";

export const getCommentsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: commentActionTypes.COMMENT_LIST_REQUEST,
    });

    const { data } = await req.get("commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: commentActionTypes.COMMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: commentActionTypes.COMMENT_LIST_FAIL,
      payload: error.message,
    });
  }
};
