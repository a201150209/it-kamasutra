import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Route } from "react-router-dom";

const Dialogs = (props) => {
  const dialogsComponents = props.state.dialogs.map((d) => {
    return <Dialog key={d.id} id={d.id} name={d.name} isActive={d.isActive} />;
  });

  const messagesComponents = props.state.messages.map((m) => {
    return (
      <Route key={m.id} path={`/dialogs/${m.dialogId}`}>
        <Message id={m.id} text={m.text}></Message>
      </Route>
    );
  });
  const getMessagesComponent = () => {
    return (
      <div>
        {messagesComponents}
        <div>
          <textarea placeholder="Send a message, bro!"></textarea>
          <button type="button">Send message</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Мои сообщения</h2>
      <div className={s.wrapper}>
        <div className={s.dialogs}>{dialogsComponents}</div>
        <div className={s.messages}>{getMessagesComponent()}</div>
      </div>
    </div>
  );
};

export default Dialogs;
