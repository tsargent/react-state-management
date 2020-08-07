import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodosReducerPage from "./screens/TodosReducer";
import TodosContextPage from "./screens/TodosContext";
import HomePage from "./screens/Home";
import { TodosProvider } from "./todos-context/TodosContext";
import "./App.css";

const TodosContextElement = () => (
  <TodosProvider>
    <TodosContextPage />
  </TodosProvider>
);

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/todos-reducer" className="nav-item">Todos Reducer</Link>
        <Link to="/todos-context" className="nav-item">Todos Context</Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/todos-reducer" element={<TodosReducerPage />} />
          <Route path="/todos-context" element={<TodosContextElement />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
