import React, { useEffect, useState } from "react";
import { fetchTasks } from "./service";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching tasks", error);
      });
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
