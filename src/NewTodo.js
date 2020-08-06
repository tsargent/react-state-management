import React, { useState } from "react";

const NewTodo = React.memo(({ addTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  const buttonClass = !text ? "disabled" : "";
  return (
    <form onSubmit={onSubmit} className="new-todo">
      <input type="text" value={text} onChange={onChange} />
      <button type="submit" className={buttonClass}>
        Add
      </button>
    </form>
  );
});
export default NewTodo;
