// TaskDetail.js
import React from "react";

const TaskDetail = ({ task }) => {
  if (!task) return <div>Select a task to see details.</div>;

  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Status: {task.isCompleted ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TaskDetail;
