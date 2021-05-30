import { authActionTypes } from "../constraints/actionTypes";

const initialState = {
  loading: false,
  accessToken: sessionStorage.getItem("aka-youtube-accessToken")
    ? sessionStorage.getItem("aka-youtube-accessToken")
    : null,
  user: sessionStorage.getItem("aka-youtube-userProfile")
    ? JSON.parse(sessionStorage.getItem("aka-youtube-userProfile"))
    : null,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        accessToken: payload,
      };
    case authActionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        loading: false,
        accessToken: null,
        error: payload,
      };
    case authActionTypes.LOAD_PROFILE:
      return {
        ...prevState,
        loading: false,
        user: payload,
      };
    case authActionTypes.LOGOUT:
      return {
        ...prevState,
        user: null,
        accessToken: null,
      };
    default:
      return prevState;
  }
};
