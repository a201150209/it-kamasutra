import React from "react";
import {
  addMessageActionCreator,
  changeActiveDialogActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const addNewMessage = (field) => {
    const action = addMessageActionCreator(field);
    props.dispatch(action);
  };

  const changeActiveDialog = (id) => {
    const action = changeActiveDialogActionCreator(id);
    props.dispatch(action);
  };

  return (
    <Dialogs
      dialogs={props.state}
      changeActiveDialog={changeActiveDialog}
      addNewMessage={addNewMessage}
    />
  );
};

export default DialogsContainer;
