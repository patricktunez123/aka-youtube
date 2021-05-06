import { authActionTypes } from "../constraints/actionTypes";

const initialState = {
  loading: false,
  profile: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        profile: null,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    default:
      return null;
  }
};
