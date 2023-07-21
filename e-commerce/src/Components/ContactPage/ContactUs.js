import { Form, Container, Button } from "react-bootstrap";
import React, { useState } from "react";

const ContactUs = (props) => {
  const [name, setName] = useState('');
  const nameHandler = (event) => {
    setName(event.target.value);
  }
  const [mail, setMail] = useState('');
  const mailHandler = (event) => {
    setMail(event.target.value);
  }
  const [phno, setPhno] = useState('');
  const phoneNumberHandler = (event) => {
    setPhno(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const customerDetails = {
      name: name,
      mailID: mail,
      phoneNumber: phno
    }
    await props.post(customerDetails);
    setName('');
    setMail('');
    setPhno('');
  }

  return (
    <div className="flex items-center justify-center mt-3">
      <Container className="bg-white rounded-lg shadow p-8 mx-auto" style={{maxWidth:'600px'}}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type='text' value={name} onChange={nameHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mail ID:</Form.Label>
            <Form.Control type='email' value={mail} onChange={mailHandler}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='tel' value={phno} onChange={phoneNumberHandler}></Form.Control>
          </Form.Group>
          <Button variant='outline-success' className="mt-3" type='submit'>Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
