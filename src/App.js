import { Route, Routes } from "react-router-dom";
import "./App.css";

import React, { useEffect } from "react";
import MyFriends from "./components/page/MyFriends";
import NoMatch from "./components/NoMatch";
import Profile from "./components/page/Profile";
import Home from "./components/page/Home";
import { connect } from "react-redux";
import { getUsersRequest } from "./components/redux";

const App = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {users.loading ? (
        <h1>Loading...</h1>
      ) : users.data.length > 0 ? (
        <Routes>
          <Route path="/" element={<Home posts={users} />} />
          <Route path="my-friends" element={<MyFriends posts={users} />} />
          <Route path="my-friends/:id" element={<Profile posts={users} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      ) : (
        <h3>{users.error}</h3>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
