import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Route } from "react-router-dom";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";

const newMessageField = React.createRef();

const Dialogs = (props) => {
  const dialogsComponents = props.state.dialogs.map((d) => {
    return <Dialog key={d.id} state={d} dispatch={props.dispatch} />;
  });
  const messagesComponents = props.state.messages.map((m) => {
    return (
      <Route key={m.id} path={`/dialogs/${m.dialogId}`}>
        <Message state={m}></Message>
      </Route>
    );
  });
  const addNewMessage = () => {
    const action = addMessageActionCreator(newMessageField.current);
    props.dispatch(action);
  };
  const getMessagesComponents = () => {
    return (
      <div>
        {messagesComponents}
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
