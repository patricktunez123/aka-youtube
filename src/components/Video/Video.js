import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import request from "../../api";
import "./_video.scss";

const Video = ({ video, channelScreen }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  //if the id is an object then handle it!
  const _videoId = id?.videoId || contentDetails?.videoId || id;

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

  const history = useHistory();
  const goToWatchScreen = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <div onClick={goToWatchScreen} className="video">
      <div className="video__top">
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} views •
        </span>
        <span> {moment(publishedAt).fromNow()} </span>
      </div>

      {!channelScreen && (
        <div className="video__channel">
          <LazyLoadImage src={channelIcon?.url} effect="opacity" />
          <p>{channelTitle}</p>
        </div>
      )}
    </div>
  );
};

export default Video;
