import React from "react";
import { NavLink } from "react-router-dom";
/*Implement isActive*/
const Dialog = (props) => {
  return (
    <div>
      <NavLink to={"/dialogs/" + props.id} id={`Dialog__${props.id}`}>
        {props.name}{" "}
      </NavLink>
    </div>
  );
};

export default Dialog;
