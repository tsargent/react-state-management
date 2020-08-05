import React from 'react'

const Todo = React.memo(({ text, checked, id, toggleTodo }) => {
    console.log('render todo', id);
    return (
      <div className="flex">
        <div>{text}</div>
        <input type="checkbox" checked={checked} onChange={() => toggleTodo(id)} />
      </div>
    )
  }
) 

export default Todo
