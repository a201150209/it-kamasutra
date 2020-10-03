import React from "react";
import s from "./UserPosts.module.css";
import { addPostActionCreator } from "../../../redux/store";

const newPostField = React.createRef();

const NewPostForm = (props) => {
  const addNewPost = () => {
    const action = addPostActionCreator(newPostField.current);
    props.dispatch(action);
  };

  return (
    <div className={s.newPostForm}>
      <textarea
        className={s.newPostField}
        placeholder="Type your post, German"
        ref={newPostField}
      ></textarea>
      <button className={s.newPostBtn} onClick={addNewPost}>
        Add new post
      </button>
    </div>
  );
};

const UserPost = (props) => {
  return (
    <div className={s.postWrapper}>
      <img className={s.avatar} src={props.avatarSrc} />
      <div className={s.post}>{props.postText}</div>
    </div>
  );
};

const UserPosts = (props) => {
  const userPosts = props.userPosts.map((p) => {
    return (
      <UserPost key={p.id} avatarSrc={p.avatarSrc} postText={p.postText} />
    );
  });

  return (
    <div>
      <div className={s.wrapper}>
        <NewPostForm dispatch={props.dispatch} />
        {userPosts}
      </div>
    </div>
  );
};

export default UserPosts;
