import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await taskService.fetchTasks();
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
  // fetchTasks()
  //   .then((data) => {
  //     setTasks(data);
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching tasks", error);
  //   });
  // }, []);

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
