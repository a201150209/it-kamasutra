import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    userPosts: state.profile.userPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (element) => {
      const action = addPostActionCreator(element);
      dispatch(action);
    }
  }
}


const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);

export default UserPostsContainer;
