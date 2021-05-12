import firebase from "firebase/app";
import { authActionTypes } from "../../constraints/actionTypes";
import auth from "../../../config/firebase";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: authActionTypes.LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const response = await auth.signInWithPopup(provider);
    const accessToken = response.credential.accessToken;

    const profile = {
      name: response.additionalUserInfo.profile.name,
      picture: response.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("aka-youtube-accessToken", accessToken);
    sessionStorage.setItem("aka-youtube-userProfile", JSON.stringify(profile));

    dispatch({
      type: authActionTypes.LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: authActionTypes.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logOut = () => (dispatch) => {
  auth.signOut();

  dispatch({
    type: authActionTypes.LOGOUT,
  });

  sessionStorage.removeItem("aka-youtube-accessToken");
  sessionStorage.removeItem("aka-youtube-userProfile");
};
