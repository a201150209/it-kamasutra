import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";
import { changeActiveDialogActionCreator } from "../../../redux/dialogs-reducer";

const Dialog = (props) => {
  const changeActiveDialog = (id) => {
    const action = changeActiveDialogActionCreator(id);
    props.dispatch(action);
  };
  return (
    <div className={s.wrapper}>
      <NavLink
        to={`/dialogs/${props.state.id}`}
        id={`Dialog__${props.state.id}`}
        onClick={changeActiveDialog.bind(null, props.state.id)}
      >
        {props.state.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
