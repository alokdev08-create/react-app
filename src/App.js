import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import ViewCourses from './components/ViewCourses';
import About from './components/About';
import ContactUs from './components/ContactUs';

const App = () => {

  return (
    <div>
      <Router>
        <Container className="mt-4">
          <Row>
            <Col md="3">
              <Menu />
            </Col>
            <Col md="9">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/add-course" element={<AddCourse/>} />
                <Route path="/view-course" element={<ViewCourses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
