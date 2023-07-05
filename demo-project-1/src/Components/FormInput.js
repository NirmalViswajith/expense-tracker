import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import FormButton from "./Button";

const FormInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <Container style={{ maxWidth: "600px" }} className="shadow-lg p-3 mb-5 bg-white rounded my-5 border">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label style={{ fontWeight: "bold", color: isValid ? "black" : "red" }}>Course Goal</Form.Label>
          <Form.Control
            type="text"
            style={{ background: !isValid ? "#ffc1c1" : "transparent", borderColor: "black" }}
            value={enteredValue}
            onChange={inputChangeHandler}
          />
        </Form.Group>
        <FormButton />
      </Form>
    </Container>
  );
};

export default FormInput;
