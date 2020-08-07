import React, { useCallback, useReducer } from "react";
import Todos from "../todos-context/Todos";
import NewTodo from "../todos-context/NewTodo";
import initialState from "../todos-context/initialState";

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

const TodosScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
    <div className="App">
      <h1>Todos</h1>
      <NewTodo addTodo={addTodo} />
      <Todos todos={state} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodosScreen;
