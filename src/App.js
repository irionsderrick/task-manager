import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";

function App() {
  return (
  <>
  <h1>Task Manager</h1>
  <Router>
{/* <Navbar /> */}
<div className="container mt-4">
  <Routes>
    {/* <Route path= "/" element={<Home /> } /> */}
    <Route path = "/taskdetail" element={<TaskDetail />} />
  </Routes>
</div>
  </Router>
  </>
  );
}

export default App;
