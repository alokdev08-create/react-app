import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddCourse = ({ onAdd }) => {
  const [course, setCourse] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = course.title.trim();
    const trimmedDescription = course.description.trim();

    if (trimmedTitle && trimmedDescription) {
      onAdd({ title: trimmedTitle, description: trimmedDescription });
      setCourse({ title: '', description: '' }); // reset form
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button color="primary">Add Course</Button>
    </Form>
  );
};

export default AddCourse;
