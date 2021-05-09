import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
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

  const fetchData = () => {
    dispatch(getVideos());
  };

  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row screen"
      >
        {videos &&
          videos.map((video) => (
            <Col key={video?.videoId || video.id} lg={3} md={4}>
              <Video video={video} />
            </Col>
          ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
