import {
  channelDetailsActionTypes,
  subscriptionActionTypes,
} from "../constraints/actionTypes";

export const getChannelReducer = (
  prevState = {
    loading: false,
    channel: {},
    subscriptionStatus: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case channelDetailsActionTypes.GET_CHANNEL_DETAILS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case channelDetailsActionTypes.GET_CHANNEL_DETAILS_SUCCESS:
      return {
        ...prevState,
        channel: payload,
        loading: false,
      };
    case channelDetailsActionTypes.GET_CHANNEL_DETAILS_FAIL:
      return {
        ...prevState,
        loading: false,
        channel: null,
        error: payload,
      };

    case subscriptionActionTypes.SET_SUBSCRIPTION_STATUS:
      return {
        ...prevState,
        subscriptionStatus: payload,
      };

    default:
      return prevState;
  }
};
