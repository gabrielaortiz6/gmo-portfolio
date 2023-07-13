import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    if (!email.trim()) {
      setEmailError(true);
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    // Submit the form
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setNameError(false);
    setEmailError(false);
  };

  const isValidEmail = (value) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <section className="p-5 m-3">
      <h1>Contact</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName"  className="m-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={nameError}
          />
          {nameError && <Form.Text className="text-danger">Name is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formEmail"  className="m-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={emailError}
          />
          {emailError && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formMessage"  className="m-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="m-3" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Contact;