import React from "react";
import s from "./Profile.module.css";
import UserPosts from "./UserPosts/UserPosts";

const Profile = (props) => {
  return (
    <div>
      <h2>Мой профиль</h2>
      <div className={s.profile}>ava + description</div>
      <UserPosts userPosts={props.state.userPosts} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
