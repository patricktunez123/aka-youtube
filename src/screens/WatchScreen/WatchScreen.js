import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import VideoSideBar from "../../components/VideoSideBar";
import VideoData from "../../components/VideoData";
import Comments from "../../components/Comments";
import {
  getVideoById,
  getRelatedVideos,
} from "../../redux/actions/videos/videos.action";
import "./_watchScreen.scss";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { videos, loading: relatedVideoLoading } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [id, dispatch]);

  const { video, loading } = useSelector((state) => state.videoByIdReducer);
  const opts = {
    // height: "100vh",
    // width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <Row>
      <Helmet>
        <title>{video?.snippet?.title}</title>
      </Helmet>
      <Col lg={8}>
        <div className="watch--screen__player">
          {/* <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe> */}
          <YouTube
            containerClassName="player"
            videoId={id}
            opts={opts}
            onReady={_onReady}
          />
        </div>
        {!loading ? (
          <VideoData video={video} videoId={id} />
        ) : (
          <h5>Loading...</h5>
        )}
        <Comments videoId={id} allComments={video?.statistics?.commentCount} />
      </Col>
      <Col lg={4}>
        {!relatedVideoLoading ? (
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoSideBar video={video} key={video.id.videoId} />
            ))
        ) : (
          <SkeletonTheme color="#282424" highlightColor="#202020">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
