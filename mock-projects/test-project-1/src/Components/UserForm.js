import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import UserButton from "./UserButton";
import Error from "./Error";
import "./error.css";

const UserForm = (props) => {
  const [error, setError] = useState(null);
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");

  const userName = (event) => {
    setName(event.target.value);
  };

  const userAge = (event) => {
    setAge(event.target.value);
  };

  const userSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
    } else if (enteredAge < 0) {
      setError({
        title: "Invalid Input",
        message: "Age must be > 0",
      });
    } else {
      const userDetails = {
        userName: enteredName,
        userAge: enteredAge,
      };
      props.addNewUser(userDetails);
    }
    setName("");
    setAge("");
  };

  const hideError = () => {
    setError(null);
  };

  return (
    <div className="container border p-3 my-5 border-dark rounded bg-dark text-light" style={{ maxWidth: "600px" }}>
      <Form  onSubmit={userSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
          <Form.Control
            type="text"
            value={enteredName}
            className="border-dark"
            onChange={userName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ fontWeight: "bold" }}>Age(Years)</Form.Label>
          <Form.Control
            type="number"
            value={enteredAge}
            className="border-dark"
            onChange={userAge}
          />
        </Form.Group>
        <UserButton type="submit" onClick={userSubmit} />
      </Form>
      {error && (
        <div className="error-popup">
          <Error title={error.title} message={error.message} onOkayClick={hideError} />
        </div>
      )}
    </div>
  );
};

export default UserForm;
