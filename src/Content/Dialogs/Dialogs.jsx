import React from "react";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
  return (
    <div>
      <p>Это мои сообщения</p>
      <Dialog message="Диалог с Ваней" />
      <Dialog message="Диалог с Мишей" />
    </div>
  );
};

export default Dialogs;
