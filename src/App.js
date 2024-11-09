import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import TaskForm from "./components/TaskFrom";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
  <>
  <h1>Task Manager</h1>
  <Router>
<NavBar />
<div className="container mt-4">
  <Routes>
    <Route path= "/" element={<TaskList /> } />
    <Route path= "/create" element={<TaskForm /> } />
    <Route path = "/task/:id" element={<TaskDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</div>
  </Router>
  </>
  );
}

export default App;
