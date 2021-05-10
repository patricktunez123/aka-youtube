import React from "react";
import moment from "moment";
import "./_singleComment.scss";
import profile from "../../files/images/profile.png";

const SingleComment = () => {
  return (
    <div className="comment d-flex p-2">
      <img className="rounded-circle mr-3" src={profile} alt="" />
      <div className="comment__body">
        <p className="comment__header mb-1">
          Aime kamanzi • {moment("10-10-20").fromNow()}
        </p>
        <p className="mb-0">This is the coolest video iv ever seen</p>
      </div>
    </div>
  );
};

export default SingleComment;
