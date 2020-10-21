import React from "react";
import s from "./Profile.module.css";
import UserPostsContainer from "./UserPosts/UserPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <h2>Мой профиль</h2>
      <div className={s.profile}>ava + description</div>
      <UserPostsContainer
        userPosts={props.state.userPosts}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
