import React, { useState, useEffect } from "react";
import axios from "axios";
import taskService from "../services/taskService";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskService.fetchTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  const handleAddTask = async () => {
    const token = localStorage.getItem("token");
    await taskService.createTask(task);

    // await axios.post(
    //   "http://localhost:5000/api/tasks",
    //   { description: task },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    fetchTasks();
    setTask("");
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
