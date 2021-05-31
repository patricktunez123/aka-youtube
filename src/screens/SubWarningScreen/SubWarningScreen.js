import React from "react";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./_subWarningScreen.scss";

const SubWarningScreen = () => {
  return (
    <div className="subWarningScreen">
      <div className="subWarningScreen__content">
        <BsFillCollectionPlayFill className="icon" />
        <h2>Don’t miss new videos</h2>
        <p>Sign in to see updates from your favorite YouTube channels</p>

        <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default SubWarningScreen;
