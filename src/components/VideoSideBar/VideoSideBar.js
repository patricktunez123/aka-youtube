import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import request from "../../api";
import "./_videoSideBar.scss";

const VideoSideBar = ({ video }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const history = useHistory();

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  //if the id is an object then handle it!
  const _videoId = id?.videoId;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get("videos/", {
        params: {
          part: "contentDetails, statistics",
          id: _videoId,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      });

      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request.get("channels/", {
        params: {
          part: "snippet",
          id: channelId,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      });

      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const handleClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <Row
      className="video--sideBar align-items-center m-1 py-2"
      onClick={handleClick}
    >
      <Col xs={6} md={6} className="video--sideBar__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="video--sideBar__thumbnail"
          wrapperClassName="video--sideBar__thumbnail--wrapper"
        />
        <span className="video--sideBar__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="video--sideBar__right p-0">
        <p className="video--sideBar__title mb-1">{title}</p>
        <div className="video--sideBar__details">
          <AiFillEye /> {numeral(views).format("0.a")} views •{" "}
          {moment(publishedAt).fromNow()}
        </div>
        <div className="video--sideBar__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src={profile}
            effect="blur"
          /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoSideBar;
