import React from "react";
import s from "./../Dialog.module.css";

const Message = (props) => {
  return (
    <div
      className={`${s.message} ${
        props.message.ownerId === 100 ? s.myMessage : s.interlocutorMessage
      }`}
    >
      <p id={`Message__${props.message.id}`}>{props.message.text}</p>
    </div>
  );
};

export default Message;
