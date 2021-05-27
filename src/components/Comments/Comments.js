import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "../SingleComment";
import { getCommentsById } from "../../redux/actions/comments/comments.action";
import { numberWithCommas } from "../../helpers/formatNumbers";
import profile from "../../files/images/profile.png";
import "./_comments.scss";

const Comments = ({ videoId, allComments }) => {
  const handleComment = () => {};
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsList.comments);

  // grab the top level comments
  const _comments = comments?.items.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  useEffect(() => {
    dispatch(getCommentsById(videoId));
  }, [dispatch, videoId]);

  return (
    <div className="comments">
      <p>{allComments && numberWithCommas(allComments)} comments</p>
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
        {_comments?.map((comment, index) => (
          <SingleComment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
