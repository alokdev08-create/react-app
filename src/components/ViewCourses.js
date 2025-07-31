import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/course/all')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
      });
  }, []);

  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        courses.map((c, index) => (
          <Card key={index} className="mb-3">
            <CardBody>
              <CardTitle tag="h5">{c.title}</CardTitle>
              <CardText>{c.description}</CardText>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
};

export default ViewCourses;
