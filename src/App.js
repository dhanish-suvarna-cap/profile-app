import { Route, Routes } from "react-router-dom";
import "./App.css";

import React, { useEffect, useState } from "react";
import MyFriends from "./components/page/MyFriends";
import NoMatch from "./components/NoMatch";
import Profile from "./components/page/Profile";
import Home from "./components/page/Home";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setPosts(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="my-friends" element={<MyFriends posts={posts} />} />
        <Route path="my-friends/:id" element={<Profile posts={posts} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
