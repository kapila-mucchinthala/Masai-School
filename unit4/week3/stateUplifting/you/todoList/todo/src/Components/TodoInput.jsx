import { useState } from "react";
import "../Styles/Todo.css";

function TodoInput({ onClick }) {
  const [text, setText] = useState("");

  return (
    <div className="todoForm">
      <input
        placeholder="Add Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onClick(text)}>Add</button>
    </div>
  );
}

export default TodoInput;
