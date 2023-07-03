import React from "react";
import { NavLink } from "react-router-dom";
import MyProfile from "../MyProfile";

const Home = ({ posts }) => {
  const myData = posts.data[0];
  return (
    <>
      <MyProfile post={myData} />
      <nav className="nav-container">
        <NavLink className={"my-frnd-link"} to="/my-friends">
          My Friends
        </NavLink>
      </nav>
    </>
  );
};

export default Home;
