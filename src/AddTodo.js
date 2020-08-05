import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const onChange = (e) => setText(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  )
} 
export default AddTodo
