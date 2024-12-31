// Login.js
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import userService from "../services/userService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.login(email, password);
      localStorage.setItem("token", response.data.token);
      window.location.href = "/"; // Redirect to the home page after login
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
          <h2>Login</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formemail">
              <Form.Label>email</Form.Label>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             // Redirect to task manager page
//         } catch (error) {
//             console.error('Login failed', error);
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default Login;
