import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-sm p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user-icon" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"></img>
      <div className="mx-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Comment;
