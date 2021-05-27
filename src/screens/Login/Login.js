import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/actions/auth/auth";
import "./_login.scss";

const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (state?.user?.accessToken !== null) {
      history.push("/");
    }
  });

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={() => handleLogin()}>Login with Gmail</button>
        <p>
          This app was created by
          <a
            href="https://www.linkedin.com/in/patrick-tunezerwane-0a901ba8/"
            target="_blank"
            rel="noreferrer"
          >
            Patrick
          </a>
          using ReactJS, Redux and Firebase
        </p>
      </div>
    </div>
  );
};

export default Login;
