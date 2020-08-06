import React, { useState } from "react";
import { v4 as id } from "uuid";

const NewTodo = React.memo(({ addTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text,
      complete: false,
      id: id(),
    });
    setText("");
  };
  const buttonClass = !text.trim() ? "disabled" : "";
  return (
    <form onSubmit={onSubmit} className="new-todo">
      <input type="text" value={text} onChange={onChange} />
      <button type="submit" disabled={!text.trim()} className={buttonClass}>
        Add
      </button>
    </form>
  );
});
export default NewTodo;
