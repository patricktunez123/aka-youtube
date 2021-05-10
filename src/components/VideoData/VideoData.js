import React from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMore from "react-show-more-text";
import profile from "../../files/images/profile.png";
import "./_videoData.scss";

const VideoData = () => {
  return (
    <div className="videoData py-2">
      <div className="videoData__top">
        <h5>Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(4000).format("0.a")} views •
            {moment("20 - 02 - 21").fromNow()}{" "}
          </span>

          <div className="">
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(4000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(4000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img src={profile} alt="" className="rounded-circle mr-3" />
          <div className="d-flex flex-column">
            <span>Patroc tuneze</span>
            <span>{numeral(4000).format("0.a")} Subscribers</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoData__description">
        <ShowMore
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass="show--more"
          expanded={false}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          perferendis, facere, architecto cumque reiciendis fugiat dolores
          blanditiis officia laudantium labore consequatur itaque libero eveniet
          accusantium minus dolore nostrum saepe similique omnis aliquam a fugit
          ut quibusdam beatae? Omnis voluptate velit nostrum autem, ipsum
          consequatur vero necessitatibus facere dolorum optio. Possimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eaque?
          Fuga ab perspiciatis veniam beatae error voluptas harum cumque
          mollitia corporis, omnis necessitatibus qui odit adipisci et facere?
          Autem ab iure voluptas cum quaerat eligendi eos rem architecto,
          commodi quidem deleniti exercitationem non, voluptate qui perferendis
          ducimus asperiores minus repellendus.
        </ShowMore>
      </div>
    </div>
  );
};

export default VideoData;
