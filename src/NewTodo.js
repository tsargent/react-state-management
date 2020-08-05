import React, { useState } from 'react'

const NewTodo = React.memo(({ addTodo }) => {
  const [text, setText] = useState('')
  const onChange = (e) => setText(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
  }
  console.log('Render AddTodo');
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  )
})
export default NewTodo
