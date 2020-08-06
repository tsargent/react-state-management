import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodosPage from "./screens/Todos";
import HomePage from "./screens/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/todos-reducer" className="nav-item">Todos Reducer</Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/todos-reducer" element={<TodosPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
