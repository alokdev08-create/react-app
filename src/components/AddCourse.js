import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
  const [course, setCourse] = useState({ title: '', description: '' });
  const [courseList, setCourseList] = useState([]);

  const handleAddToList = () => {
    const trimmedTitle = course.title.trim();
    const trimmedDescription = course.description.trim();

    if (trimmedTitle && trimmedDescription) {
      setCourseList([...courseList, { title: trimmedTitle, description: trimmedDescription }]);
      setCourse({ title: '', description: '' });
    }
  };

  const handleSubmitList = async () => {
    if (courseList.length === 0) {
      toast.warning("No courses to submit!", { position: "top-center" });
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/v1/course/saveCourse', courseList);
      toast.success("Courses submitted successfully!", { position: "top-center" });
      setCourseList([]);
    } catch (error) {
      console.error("Failed to submit courses:", error);
      toast.error("Failed to submit courses. Please try again.", { position: "top-center" });
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={course.title}
            onChange={handleChange}
            placeholder="Enter course title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={course.description}
            onChange={handleChange}
            placeholder="Enter course description"
          />
        </FormGroup>
        <Button color="secondary" onClick={handleAddToList}>
          Add more courses
        </Button>{' '}
        <Button color="primary" onClick={handleSubmitList}>
          Submit
        </Button>
      </Form>

      <div style={{ marginTop: '1rem' }}>
        <ul>
          {courseList.map((c, index) => (
            <li key={index}>
              <strong>{c.title}</strong>: {c.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddCourse;
