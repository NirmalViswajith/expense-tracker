import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  async function handler(e) {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      phone: phone,
    };
    const response = await fetch(
      "https://react-app-b039c-default-rtdb.firebaseio.com/customer_details.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const datas = response.json();
    datas.then((res) => console.log(res));
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <Fragment>
      <div
        className="contact-container"
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form>
          <h2>Contact Us</h2>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={nameHandler}
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={emailHandler}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formGroupPhone">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              value={phone}
              onChange={phoneHandler}
              type="tel"
              placeholder="Enter Phone No."
            />
          </Form.Group>

          <Form.Group controlId="formGroupMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Type your message here..."
            />
          </Form.Group>

          <Button onClick={handler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Contact;
