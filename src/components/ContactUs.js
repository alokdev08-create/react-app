import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="message" id="message" value={form.message} onChange={handleChange} />
      </FormGroup>
      <Button color="primary">Send Message</Button>
    </Form>
  );
};

export default ContactUs;
