import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FormButton from "./Button";

const FormInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <Container style={{maxWidth : "600px"}} className="shadow-lg p-3 mb-5 bg-white rounded my-5 border">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label style={{fontWeight:'bold'}}>Course Goal</Form.Label>
          <Form.Control type="text" className="border border-dark" value={enteredValue} onChange={inputChangeHandler} />
        </Form.Group>
        <FormButton />
      </Form>
    </Container>
  );
};

export default FormInput;
