import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.wrapper}>
      <p id={`Message__${props.state.id}`}>{props.state.text}</p>
    </div>
  );
};

export default Message;
