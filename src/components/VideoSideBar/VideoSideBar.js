import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api";
import profile from "../../files/images/profile.png";
import "./_videoSideBar.scss";

const VideoSideBar = () => {
  const seconds = moment.duration(300).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="video--sideBar align-items-center m-1 py-2">
      <Col xs={6} md={4} className="video--sideBar__left">
        <LazyLoadImage
          src={profile}
          effect="blur"
          className="video--sideBar__thumbnail"
          wrapperClassName="video--sideBar__thumbnail--wrapper"
        />
        <span className="video--sideBar__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="video--sideBar__right p-0">
        <p className="video--sideBar__title mb-1">
          Be so good at doing things here!!!!
        </p>
        <div className="video--sideBar__details">
          <AiFillEye /> {numeral(400000000000).format("0.a")} views •
          {moment("10-10-2000").fromNow()}
        </div>
        <div className="video--sideBar__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src={profile}
            effect="blur"
          /> */}
          <p>The name of the channel</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoSideBar;
