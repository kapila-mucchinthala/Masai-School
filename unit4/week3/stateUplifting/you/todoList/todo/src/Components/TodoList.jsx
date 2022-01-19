import React from "react";
import "../Styles/Todo.css";

function TodoList({ title, status, id, handleToggle, removeTodo }) {
  return (
    <div
      className="todoItem"
      style={{ backgroundColor: status ? " #46d246" : null }}
    >
      <input id="check" type="checkbox" onClick={() => handleToggle(id)} />
      <li
        id="todoTitle"
        style={{
          color: "black",
          textDecoration: status ? "line-through" : null,
        }}
      >
        {title}
      </li>
      <button id="del" onClick={() => removeTodo(id)}>
        {status ? "remove" : "Delete"}
      </button>
    </div>
  );
}

export default TodoList;
