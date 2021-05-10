import React from "react";
import SingleComment from "../SingleComment";
import profile from "../../files/images/profile.png";
import "./_comments.scss";

const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>122222 comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img className="rounded-circle mr-3" src={profile} alt="" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Add a public comment..."
            className="flex-grow-1"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(15)].map(() => (
          <SingleComment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
