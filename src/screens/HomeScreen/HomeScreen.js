import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Helmet } from "react-helmet";
import {
  getVideos,
  getVideosByCategory,
} from "../../redux/actions/videos/videos.action";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Video";
import Skeleton from "../../components/Skeletons/videoSkeleton";
import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.videosReducer
  );

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Aka YouTube!!</title>
      </Helmet>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={[...Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Skeleton className="skeleton" />
          </Col>
        ))}
        className="row screen"
      >
        {videos && !loading
          ? videos.map((video) => (
              <Col key={video?.videoId || video.id} lg={3} md={4}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <Skeleton className="skeleton" />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
