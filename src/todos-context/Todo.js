import React from "react";

const Todo = React.memo(({ todo, toggleTodo }) => {
  return (
    <div className="todo">
      <label htmlFor={todo.id} className="flex">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.complete ? "complete" : ""}>{todo.text}</span>
      </label>
    </div>
  );
});

export default Todo;
