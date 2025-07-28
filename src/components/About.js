import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const About = () => {
  return (
    <Card className="mt-3">
      <CardBody>
        <CardTitle tag="h4">About Us</CardTitle>
        <CardText>
          We are passionate about building efficient and scalable backend solutions.
          Our mission is to help developers write clean, optimized Java code while exploring advanced concurrency and persistence strategies.
        </CardText>
      </CardBody>
    </Card>
  );
};

export default About;
