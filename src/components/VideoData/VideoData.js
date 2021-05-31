import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMore from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import {
  getChannelDetails,
  setSubscription,
} from "../../redux/actions/channel/channel.action";
import "./_videoData.scss";

const VideoData = ({ video, videoId }) => {
  const dispath = useDispatch();
  const channel = useSelector((state) => state.getChannelReducer.channel);
  const subscriptionStatus = useSelector(
    (state) => state.getChannelReducer.subscriptionStatus
  );

  useEffect(() => {
    dispath(getChannelDetails(video?.snippet?.channelId));
  }, [dispath, video?.snippet?.channelId]);

  useEffect(() => {
    dispath(setSubscription(video?.snippet?.channelId));
  }, [dispath, video?.snippet?.channelId]);

  return (
    <div className="videoData py-2">
      <div className="videoData__top">
        <h5>{video?.snippet?.title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            <span className="numeral-uppercasing">
              {numeral(video?.statistics?.viewCount).format("0.a")}
            </span>{" "}
            views • {moment(video?.snippet?.publishedAt).fromNow()}
          </span>

          <div className="">
            <span className="mr-3 numeral-uppercasing">
              <MdThumbUp size={25} className="mr-1" />
              {numeral(video?.statistics?.likeCount).format("0.a")}
            </span>
            <span className="mr-3 numeral-uppercasing">
              <MdThumbDown size={25} className="mr-1" />
              {numeral(video?.statistics?.dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channel?.snippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{video?.snippet?.channelTitle}</span>
            <span>
              <span className="numeral-uppercasing">
                {numeral(channel?.statistics?.subscriberCount).format("0.a")}
              </span>{" "}
              Subscribers
            </span>
          </div>
        </div>

        <button
          className={`btn border-0 p-2 m-2 ${subscriptionStatus && "btn-grey"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="videoData__description">
        <ShowMore
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass="show--more"
          expanded={false}
        >
          {video?.snippet?.description}
        </ShowMore>
      </div>
    </div>
  );
};

export default VideoData;
