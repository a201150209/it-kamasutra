import React from "react";
import s from "./../Dialog.module.css";

const NewMessageForm = (props) => {
  const newMessageField = React.createRef();

  const onClick = () => {
    props.addNewMessage(newMessageField.current);
  };

  return (
    <div className={s.formWrapper}>
      <textarea
        placeholder="Send a message, bro!"
        ref={newMessageField}
      ></textarea>
      <button type="button" onClick={onClick}>
        Send message
      </button>
    </div>
  );
};

export default NewMessageForm;
