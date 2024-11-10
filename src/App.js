import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import TaskForm from "./components/TaskForm";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
