import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";


const Dialog = (props) => {
  const changeActiveDialog = (id) => {
    props.changeActiveDialog(id);
  };
  return (
    <div className={s.wrapper}>
      <NavLink
        to={`/dialogs/${props.dialog.id}`}
        id={`Dialog__${props.dialog.id}`}
        onClick={changeActiveDialog(props.dialog.id)}
      >
        {props.dialog.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
