import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import TaskForm from "./components/TaskForm";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskManager from "./components/TaskManager";
import TempRegister from "./components/TempRegister";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tempregister" element={<TempRegister />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
