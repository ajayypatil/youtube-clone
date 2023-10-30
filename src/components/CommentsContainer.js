import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Ajay Yadav",
      text: " lorem epsidm kjncjnc, jchcnsck",
      replies: [
        {
          name: "Ajay Yadav",
          text: " lorem epsidm kjncjnc, jchcnsck",
          replies: [
            {
              name: "Ajay Yadav",
              text: " lorem epsidm kjncjnc, jchcnsck",
              replies: [
                {
                  name: "Ajay Yadav",
                  text: " lorem epsidm kjncjnc, jchcnsck",
                  replies: [
                    {
                      name: "Ajay Yadav",
                      text: " lorem epsidm kjncjnc, jchcnsck",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Ajay Yadav",
              text: " lorem epsidm kjncjnc, jchcnsck",
              replies: [
                {
                  name: "Ajay Yadav",
                  text: " lorem epsidm kjncjnc, jchcnsck",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Ajay Yadav",
      text: " lorem epsidm kjncjnc, jchcnsck",
      replies: [],
    },
    {
      name: "Ajay Yadav",
      text: " lorem epsidm kjncjnc, jchcnsck",
      replies: [],
    },
    {
      name: "Ajay Yadav",
      text: " lorem epsidm kjncjnc, jchcnsck",
      replies: [],
    },
    {
      name: "Ajay Yadav",
      text: " lorem epsidm kjncjnc, jchcnsck",
      replies: [
        {
          name: "Ajay Yadav",
          text: " lorem epsidm kjncjnc, jchcnsck",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
