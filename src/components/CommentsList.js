import React from "react";
import Comment from "./Comment";

const CommentsList = (props) => {
  const comments = props.data;
  return (
    <div>
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comment  data={comment} />
          <div className="pl-5 border-l-black border-l-2 ml-5">
            <CommentsList key={index} data={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
