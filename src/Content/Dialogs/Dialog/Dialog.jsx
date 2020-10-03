import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";
/*Implement isActive*/
const Dialog = (props) => {
  return (
    <div className={s.wrapper}>
      <NavLink to={`/dialogs/${props.id}`} id={`Dialog__${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
