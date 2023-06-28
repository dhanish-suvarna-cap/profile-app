import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const Profile = ({ posts }) => {
  const { id } = useParams();
  let post = posts.filter((post) => post.id === parseInt(id));

  return <>{post.length > 0 && <Card post={post[0]} />}</>;
};

export default Profile;
