import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./screens/Home";
import "./App.css";

const TodosReducerElement = lazy(() => import('./screens/TodosReducer'));
const TodosContextElement = lazy(() => import('./screens/TodosContext'));
const StarWarsElement = lazy(() => import('./screens/StarWars'));

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/todos-reducer" className="nav-item">Todos Reducer</Link>
        <Link to="/todos-context" className="nav-item">Todos Context</Link>
        <Link to="/star-wars" className="nav-item">Star Wars</Link>
      </nav>
      <main className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/todos-reducer" element={<TodosReducerElement />} />
            <Route path="/todos-context" element={<TodosContextElement />} />
            <Route path="/star-wars" element={<StarWarsElement />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
