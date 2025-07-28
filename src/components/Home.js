import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  const handleClick = () => {
    alert("You clicked the CTA button!");
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h1 className="display-4 mb-4">Welcome to the Home Page</h1>
          <p className="lead">
            Explore our app features, learn more, and start your journey.
          </p>
          <Button color="primary" size="lg" onClick={handleClick}>
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
