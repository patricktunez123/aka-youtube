import {
  channelDetailsActionTypes,
  subscriptionActionTypes,
} from "../../constraints/actionTypes";
import req from "../../../api";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: channelDetailsActionTypes.GET_CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await req.get("channels/", {
      params: {
        part: "snippet,contentDetails,statistics",
        id,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    dispatch({
      type: channelDetailsActionTypes.GET_CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: channelDetailsActionTypes.GET_CHANNEL_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const setSubscription = (id) => async (dispatch, getState) => {
  try {
    const { data } = await req.get("subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: `Bearer${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: subscriptionActionTypes.SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
