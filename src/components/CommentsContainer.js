import React from "react";

const commentsData = [
  {
    name: "Starting",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Suraj Gupta2",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Suraj Gupta",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Suraj Gupta",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Suraj Gupta",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Suraj Gupta",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Suraj Gupta",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Suraj Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Suraj Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Suraj Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Suraj Gupta",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        alt="user"
        src="http://localhost:3000/static/media/UserIcon.2ffee28a30387fc9fe84.png"
        className="w-12 h-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
            {/* Replies are the list of comments itself */}
            <CommentsList comments = {comment.replies} />
        </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
