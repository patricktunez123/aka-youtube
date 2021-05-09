import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import auth from "../../config/firebase";
import { loginSuccess } from "../../redux/actions/auth/auth";
import "./_login.scss";

const Login = () => {
  const profile = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
      const response = await auth.signInWithPopup(provider);
      dispatch(loginSuccess(response.additionalUserInfo.profile));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleLogin();
  });

  console.log("this is the profile", profile);

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={() => handleLogin()}>Login with Gmail</button>
        <p>This app was created by Patrick with ReactJS, Redux and Firebase</p>
      </div>
    </div>
  );
};

export default Login;
