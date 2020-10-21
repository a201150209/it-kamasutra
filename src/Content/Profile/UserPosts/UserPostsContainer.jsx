import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import UserPosts from "./UserPosts";

const UserPostsContainer = (props) => {
  const addNewPost = (element) => {
    const action = addPostActionCreator(element);
    props.dispatch(action);
  };

  return <UserPosts userPosts={props.userPosts} addNewPost={addNewPost} />;
};

export default UserPostsContainer;
