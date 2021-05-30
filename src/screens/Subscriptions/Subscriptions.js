import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Helmet } from "react-helmet";
import { getSubscribeVideos } from "../../redux/actions/videos/videos.action";
import VideoSideBar from "../../components/VideoSideBar";
import SubWarningScreen from "../SubWarningScreen";
import "./_subscriptions.scss";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector((state) => state.subscriptionsVideos);
  const accessToken = useSelector((state) => state?.auth?.accessToken);

  useEffect(() => {
    dispatch(getSubscribeVideos());
  }, [dispatch]);

  return (
    <Container fluid>
      <Helmet>
        <title>Subscriptions</title>
      </Helmet>
      {!loading && !accessToken ? (
        <>
          <SubWarningScreen />
        </>
      ) : (
        <>
          {!loading ? (
            videos?.map((video) => (
              <VideoSideBar video={video} key={video.id} subScreen />
            ))
          ) : (
            <SkeletonTheme color="#282424" highlightColor="#202020">
              <Skeleton width="100%" height="160px" count={20} />
            </SkeletonTheme>
          )}
        </>
      )}
    </Container>
  );
};

export default Subscriptions;
