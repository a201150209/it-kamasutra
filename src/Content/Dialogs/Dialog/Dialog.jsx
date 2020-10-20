import React from "react";
import { NavLink, Route } from "react-router-dom";
import Message from "./Message/Message";
import NewMessageForm from "./Message/NewMessageForm";
import s from "./Dialog.module.css";

const Dialog = (props) => {
  const onClick = () => {
    props.changeActiveDialog(props.dialog.id);
  };

  const messagesComponents = props.dialog.messages.map((message) => {
    return <Message message={message}></Message>;
  });

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.dialog}>
          <NavLink
            to={`/dialogs/${props.dialog.id}`}
            id={`Dialog__${props.dialog.id}`}
            className={s.link}
            activeClassName={s.activeLink}
            onClick={onClick}
          >
            {props.dialog.name}
          </NavLink>
        </div>
        <div className={s.messages}>
          <Route path={`/dialogs/${props.dialog.id}`}>
            {messagesComponents}
            <NewMessageForm addNewMessage={props.addNewMessage} />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
