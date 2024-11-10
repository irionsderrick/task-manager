import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Container className="mt-5">
            <h1>Welcome to Task Manager</h1>
            <p>
              Task Manager is your ultimate solution for keeping track of your
              daily tasks and staying organized. Whether you're managing
              personal projects or collaborating with a team, our application
              provides a seamless and intuitive experience to help you get
              things done efficiently.
            </p>
            <p>
              With features like task creation, deadline tracking, and user
              authentication, Task Manager is designed to cater to all your
              productivity needs. Sign up today and take the first step towards
              a more organized and productive life!
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const Home = () => {
//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col xs={12} md={6}>
//           <h1>Welcome to Task Manager</h1>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;
