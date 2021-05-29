import {
  commentActionTypes,
  addCcommentActionTypes,
} from "../../constraints/actionTypes";
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

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const object = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    const { data } = await req.post("commentThreads", object, {
      params: {
        part: "snippet",
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: `Bearer${getState().auth?.accessToken}`,
      },
    });
    console.log(data);
    dispatch({
      type: addCcommentActionTypes.ADD_COMMENT_SUCCESS,
    });
    setTimeout(() => dispatch(getCommentsById(id)), 300);
  } catch (error) {
    console.log(error);
    dispatch({
      type: addCcommentActionTypes.ADD_COMMENT_FAIL,
      payload: error.message,
    });
  }
};
