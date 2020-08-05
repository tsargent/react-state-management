import React, { useReducer, useCallback } from 'react';
import { v4 as id } from 'uuid';
import './App.css';
import Todos from './Todos';
import NewTodo from './NewTodo';

import initialState from './initialState';

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [{ text: action.payload, id: id(), complete: false}, ...state]
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        } else {
          return { ...todo, complete: !todo.complete }
        }
      })
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = useCallback((text) => {
    dispatch({
      type: ADD_TODO,
      payload: text,
    });
  }, [dispatch]);

  const toggleTodo = useCallback((id) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id,
    });
  }, [dispatch]);

  return (
    <div className="App">
      <NewTodo addTodo={addTodo}/>
      <Todos todos={state} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
