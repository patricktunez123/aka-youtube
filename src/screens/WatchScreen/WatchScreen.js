import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoSideBar from "../../components/VideoSideBar";
import VideoData from "../../components/VideoData";
import Comments from "../../components/Comments";
import { getVideoById } from "../../redux/actions/videos/videos.action";
import "./_watchScreen.scss";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [id, dispatch]);

  const { video, loading } = useSelector((state) => state.videoByIdReducer);

  return (
    <Row>
      <Col lg={8}>
        <div className="watch--screen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoData video={video} videoId={id} />
        ) : (
          <h5>Loading...</h5>
        )}
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
