import React, { useReducer, createContext, useCallback } from 'react';
import initialState from "../todos-context/initialState";

export const TodosContext = createContext();

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return { ...todo, complete: !todo.complete };
        }
      });
    default:
      return state;
  }
};

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const addTodo = useCallback(
    (text) => {
      dispatch({
        type: ADD_TODO,
        payload: text,
      });
    },
    [dispatch]
  );
  
  const toggleTodo = useCallback(
    (id) => {
      dispatch({
        type: TOGGLE_TODO,
        payload: id,
      });
    },
    [dispatch]
  );
  
  const value = { todos, addTodo, toggleTodo }
  return (
    <TodosContext.Provider value={value} >
      {children}
    </TodosContext.Provider>
  );
}
