// TaskForm.js
import React, { useState } from "react";
import axios from "axios";
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TaskForm = ({ onTaskCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      name,
      description,
      dueDate: new Date(),
      isCompleted: false,
    };
    await axios.post("/api/tasks", newTask);
    onTaskCreated(newTask);
    setName("");
    setDescription("");
  };

  // const TaskForm = ({ onTaskCreated }) => { const [name, setName] = useState(''); const [description, setDescription] = useState(''); const [dueDate, setDueDate] = useState(''); const handleSubmit = async (e) => { e.preventDefault(); const newTask = { name, description, dueDate, isCompleted: false }; await axios.post('/api/tasks', newTask); onTaskCreated(newTask); setName(''); setDescription(''); setDueDate(''); };
  return (
    <>
      {/* <Container> <Row className="justify-content-md-center"> <Col xs={12} md={6}> <h2>Create Task</h2> <Form onSubmit={handleSubmit}> <Form.Group controlId="formTaskName"> <Form.Label>Task Name</Form.Label> <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter task name" required /> </Form.Group> <Form.Group controlId="formTaskDescription"> <Form.Label>Description</Form.Label> <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" rows={3} required /> </Form.Group> <Form.Group controlId="formTaskDueDate"> <Form.Label>Due Date</Form.Label> <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required /> </Form.Group> <Button variant="primary" type="submit" className="mt-3"> Add Task </Button> </Form> </Col> </Row> </Container> */}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default TaskForm;
