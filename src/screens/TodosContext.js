import React from "react";
import Todos from "../todos-context/Todos";
import NewTodo from "../todos-context/NewTodo";
import { TodosProvider } from "../todos-context/TodosContext";

const TodosScreen = () => {
  return (
    <div className="App">
      <h1>Todos</h1>
      <NewTodo />
      <Todos />
    </div>
  );
};

const TodosProviderScreen = () => (
  <TodosProvider>
    <TodosScreen />
  </TodosProvider>
)

export default TodosProviderScreen
