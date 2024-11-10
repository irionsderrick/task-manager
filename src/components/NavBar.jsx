import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search submitted");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Task Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">
              Home
            </Nav.Link> */}
            <Nav.Link as={Link} to="/tasks">
              Task List
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              Create Task
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/tasklist">Task List</Link>
//         </li>
//         <li>
//           <Link to="/create">Create Task</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
