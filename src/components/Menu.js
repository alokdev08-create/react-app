import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu = () => {
  return (
    <ListGroup>
      <ListGroupItem tag="a" action>
        <Link to="/home">Home</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" action>
        <Link to="/add-course">Add Courses</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" action>
        <Link to="/view-course">View Courses</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" action>
        <Link to="/about">About</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" action>
        <Link to="/contact-us">Contact Us</Link>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menu;
