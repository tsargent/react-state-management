import React, { useContext } from 'react'
import { TodosContext } from './TodosContext';
import Todo from './Todo'

const Todos = () => {
  const { todos, toggleTodo } = useContext(TodosContext);
  return (
    <div>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}
    </div>
  )
};

export default Todos
