import React from "react";
import { AiFillEye } from "react-icons/ai";
import coverImage from "../../files/images/video-cover-image.jpg";
import "./_video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src={coverImage} alt="" />
        <span>05:45</span>
      </div>
      <div className="video__title">
        Awesome YouTube clone!! with ReactJS, redux, firebase and react
        bootstrap
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5M views •{" "}
        </span>
        <span> 5 days ago </span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwniYYUxCCF_7F5vuyY_HJkb7M6UYH5FnBQkK-Mnu5A=s48-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Mugabo Eric</p>
      </div>
    </div>
  );
};

export default Video;
