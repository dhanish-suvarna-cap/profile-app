import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ post }) => {
  return (
    <>
      <li className="frnds-list">
        <img className="list-img" src={post.image} alt="" />
        <Link to={`${post.id}`}>
          {post.firstName} {post.lastName}
        </Link>
      </li>
    </>
  );
};

export default ListCard;
