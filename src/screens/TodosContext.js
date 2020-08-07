import React from "react";
import Todos from "../todos-context/Todos";
import NewTodo from "../todos-context/NewTodo";
const TodosScreen = () => {
  return (
    <div className="App">
      <h1>Todos</h1>
      <NewTodo />
      <Todos />
    </div>
  );
};

export default TodosScreen;
