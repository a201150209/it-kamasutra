import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.wrapper}>
      <p id={props.id}>{props.text}</p>
    </div>
  );
};

export default Message;
