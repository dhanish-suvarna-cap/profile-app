import React from "react";

const Card = ({ post }) => {
  return (
    <>
      <div className="card">
        <img src={post.image} alt="" />
        <h1>
          {post.firstName} {post.maidenName} {post.lastName}
        </h1>
        <h3>Age : {post.age}</h3>
        <h3>Email : {post.email}</h3>
        <h3>Department : {post?.company?.department}</h3>
        <h3>Title : {post?.company?.title}</h3>
      </div>
    </>
  );
};

export default Card;
