import { authActionTypes } from "../../constraints/actionTypes";

export const loginRequest = () => {
  return {
    type: authActionTypes.LOGIN_REQUEST,
  };
};

export const loginSuccess = (profile) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: profile,
  };
};
