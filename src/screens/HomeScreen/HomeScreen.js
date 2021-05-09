import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../redux/actions/videos/videos.action";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Video";
import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videosReducer);

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);
  return (
    <Container>
      <CategoriesBar />
      <Row className="screen">
        {videos &&
          videos.map((video) => (
            <Col key={video?.videoId || video.id} lg={3} md={4}>
              <Video video={video} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
