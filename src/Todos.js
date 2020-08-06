import React from 'react'
import Todo from './Todo'

const Todos = ({ todos = [], toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}
    </div>
  )
};

export default Todos
