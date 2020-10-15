import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Route } from "react-router-dom";

const newMessageField = React.createRef();

const Dialogs = (props) => {
  const dialogsComponents = props.dialogs.map((dialog) => {
    return <Dialog key={dialog.id} dialog={dialog} changeActiveDialog={props.changeActiveDialog} />;
  });

  const messagesComponents = props.messages.map((message) => {
    return (
      <Route key={message.id} path={`/dialogs/${message.dialogId}`}>
        <Message message={message}></Message>
      </Route>
    );
  });

  const addNewMessage = () => {
    props.addNewMessage(newMessageField.current)
  };

  const getMessagesComponents = () => {
    return (
      <div>
        {messagesComponents}
       {/* todo перенести в отдельный компонет*/}
        <div className={s.formWrapper}>
          <textarea
            placeholder="Send a message, bro!"
            ref={newMessageField}
          ></textarea>
          <button type="button" onClick={addNewMessage}>
            Send message
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Мои сообщения</h2>
      <div className={s.wrapper}>
        <div className={s.dialogs}>{dialogsComponents}</div>
        <div className={s.messages}>{getMessagesComponents()}</div>
      </div>
    </div>
  );
};

export default Dialogs;
