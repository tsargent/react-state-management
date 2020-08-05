import React from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
