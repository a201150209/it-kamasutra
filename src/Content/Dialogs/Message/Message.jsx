import React from "react";

const Message = (props) => {
  return (
    <div>
      <p id={props.id}>{props.text}</p>
    </div>
  );
};

export default Message;
