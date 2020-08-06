import React from "react";

const Todo = React.memo(({ text, checked, id, toggleTodo }) => {
  return (
    <div>
      <label htmlFor={id} className="flex">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={() => toggleTodo(id)}
        />
        <span>{text}</span>
      </label>
    </div>
  );
});

export default Todo;
