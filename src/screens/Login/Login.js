import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/auth/auth.action";
import "./_login.scss";

const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (state?.auth?.accessToken !== null) {
      history.push("/");
    }
  });

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG1.png"
            alt=""
          />
        </Link>
        <button onClick={handleLogin}>Login with Gmail</button>
        <p>This app was created using ReactJS, Redux and Firebase.</p>
        <p>
          WhatsApp{" "}
          <a
            href="https://wa.me/+250781429268"
            target="_blank"
            rel="noreferrer"
          >
            Patrick (Developer)
          </a>
        </p>
        <p>
          <Link to="/">Watch videos</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
