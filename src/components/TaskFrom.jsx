// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { name, description, dueDate: new Date(), isCompleted: false };
    await axios.post('/api/tasks', newTask);
    onTaskCreated(newTask);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description"></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
