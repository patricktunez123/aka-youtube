import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getSearchedVideos } from "../../redux/actions/videos/videos.action";
import VideoSideBar from "../../components/VideoSideBar";
import "./_searchScreen.scss";

const SearchScreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.searchVideos);

  useEffect(() => {
    dispatch(getSearchedVideos(query));
  }, [query, dispatch]);

  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoSideBar video={video} key={video.id.videoId} SearchScreen />
        ))
      ) : (
        <SkeletonTheme color="#282424" highlightColor="#202020">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;
