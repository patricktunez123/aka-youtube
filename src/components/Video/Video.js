import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import "./_video.scss";

const Video = ({ video }) => {
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
  } = video;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get("videos/", {
        params: {
          part: "contentDetails, statistics",
          id: id,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      });

      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    getVideoDetails();
  }, [id]);

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

  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
        <span>{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} views •
        </span>
        <span> {moment(publishedAt).fromNow()} </span>
      </div>
      <div className="video__channel">
        <img src={channelIcon?.url} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
