// Register.js
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import userService from "../services/userService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordHash !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await userService.register(email, passwordHash);
      console.log("....................", email, passwordHash);
      // window.location.href = "/login"; // Redirect to the login page after register
    } catch (error) {
      console.error(
        "Login failed. Please check your email and password.",
        error
      );
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Register</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>}
          {success && (
            <Alert variant="success">
              Registration successful! You can now log in.
            </Alert>
          )} */}
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordHash}
                onChange={(e) => setPasswordHash(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
