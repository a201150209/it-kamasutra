import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} activeClassName={s.active} to="/profile">
        Мой профиль
      </NavLink>
      <NavLink className={s.link} activeClassName={s.active} to="/dialogs">
        Мои сообщения
      </NavLink>
    </div>
  );
};

export default Navigation;
