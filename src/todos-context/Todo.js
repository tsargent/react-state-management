import React, { useContext } from "react";
import { TodosContext } from './TodosContext';
const Todo = React.memo(({ todo }) => {

  const { toggleTodo } = useContext(TodosContext);

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
