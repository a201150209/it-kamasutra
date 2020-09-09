import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <Link to="./profile">Мой кабинет</Link>
      <Link to="./dialogs">Мои сообщения</Link>
    </div>
  );
};

export default Navigation;
