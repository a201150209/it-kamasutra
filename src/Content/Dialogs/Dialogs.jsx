import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  const dialogsComponents = props.dialogs.map((dialog) => {
    return (
      <Dialog
        key={dialog.id}
        dialog={dialog}
        changeActiveDialog={props.changeActiveDialog}
        addNewMessage={props.addNewMessage}
      />
    );
  });

  return (
    <div>
      <h2>Мои сообщения</h2>
      <div className={s.wrapper}>
        <div className={s.dialogs}>{dialogsComponents}</div>
      </div>
    </div>
  );
};

export default Dialogs;
