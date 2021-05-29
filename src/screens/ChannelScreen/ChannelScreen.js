import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import numeral from "numeral";
import { getVideosByChannel } from "../../redux/actions/videos/videos.action";
import { getChannelDetails } from "../../redux/actions/channel/channel.action";
import VideoSideBar from "../../components/VideoSideBar";
import "./_channelScreen.scss";

const ChannelScreen = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams();
  const { loading, videos } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state) => state.getChannelReducer.channel
  );

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
          <img src={snippet?.thumbnails?.default?.url} alt="" />

          <div className="ml-3 channelHeader__details">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>

      <Container>
        <Row className="mt-2">
          {!loading
            ? videos?.map((video) => (
                <Col md={3} lg={3}>
                  <VideoSideBar video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map(() => (
                <Col md={3} lg={3}>
                  <SkeletonTheme color="#282424" highlightColor="#202020">
                    <Skeleton width="100%" height="140px" />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;
