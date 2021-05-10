import React from "react";
import { Col, Row } from "react-bootstrap";
import VideoSideBar from "../../components/VideoSideBar";
import VideoData from "../../components/VideoData";
import Comments from "../../components/Comments";
import "./_watchScreen.scss";

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watch--screen__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
            frameBorder="0"
            title="video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoSideBar />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
