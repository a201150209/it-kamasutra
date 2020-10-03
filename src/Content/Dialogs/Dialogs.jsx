import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsComponents = props.state.dialogs.map((d) => {
    return <Dialog key={d.id} id={d.id} name={d.name} isActive={d.isActive} />;
  });

  const messagesComponents = props.state.messages.map((m) => {
    return (
      <Message
        key={m.id}
        id={m.id}
        dialogId={`Dialog__${m.dialogId}`}
        text={m.text}
      ></Message>
    );
  });

  return (
    <div>
      <h2>Мои сообщения</h2>
      <div className={s.wrapper}>
        <div className={s.dialogs}>{dialogsComponents}</div>
        <div className={s.messages}>{messagesComponents}</div>
      </div>
    </div>
  );
};

export default Dialogs;
