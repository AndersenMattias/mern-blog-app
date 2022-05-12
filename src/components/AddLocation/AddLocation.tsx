import React, { useState } from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import BootstrapBtn from '../BootstrapBtn/BootstrapBtn';

const AddLocation = () => {
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <h2>Add Location</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <FloatingLabel
            controlId='floatingInput'
            label='Title'
            className='mb-3'
          >
            <Form.Control required type='text' placeholder='Title' />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='4' controlId='validationCustom02'>
          <FloatingLabel
            controlId='floatingInput'
            label='Description'
            className='mb-3'
          >
            <Form.Control
              as='textarea'
              placeholder='Description'
              style={{ height: '100px' }}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='4' controlId='validationCustom03'>
          <FloatingLabel
            controlId='floatingInput'
            label='Date'
            className='mb-3'
          >
            <Form.Control type='date' placeholder='When?' required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='4' controlId='validationCustom04'>
          <FloatingLabel
            controlId='floatingInput'
            label='Place'
            className='mb-3'
          >
            <Form.Control type='text' placeholder='Place' required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='4' controlId='validationCustom05'>
          <Form.Text className='text-muted'>Upload Image</Form.Text>
          <Form.Control type='file' />
        </Form.Group>

        <BootstrapBtn variant='primary' type='submit' text='Add' />
      </Form>
    </Container>
  );
};

export default AddLocation;
