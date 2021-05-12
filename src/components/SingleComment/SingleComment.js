import React from "react";
import moment from "moment";
import "./_singleComment.scss";

const SingleComment = ({ comment }) => {
  const { textDisplay, authorDisplayName, authorProfileImageUrl, publishedAt } =
    comment;

  return (
    <div className="comment d-flex p-2">
      <img className="rounded-circle mr-3" src={authorProfileImageUrl} alt="" />
      <div className="comment__body">
        <p className="comment__header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default SingleComment;
