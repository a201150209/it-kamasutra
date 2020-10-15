import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.wrapper}>
      <p id={`Message__${props.message.id}`}>{props.message.text}</p>
    </div>
  );
};

export default Message;
