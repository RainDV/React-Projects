import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleOnClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleOnClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
