import React from 'react'
import Todo from './Todo'

const Todos = ({ todos = [], toggleTodo }) => {
  return (
    <div>
      {todos.map(({id, text}) => <Todo key={id} text={text} toggleTodo={toggleTodo} id={id} />)}
    </div>
  )
};

export default Todos
