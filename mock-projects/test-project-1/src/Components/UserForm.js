import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import UserButton from "./UserButton";
import Error from "./Error";
import "./error.css";

const UserForm = (props) => {
  
  const [error, setError] = useState(null);

  const enteredName = useRef();
  const enteredAge = useRef();
  const enteredCollege = useRef();

  const userSubmit = (event) => {
    event.preventDefault();
    const name = enteredName.current.value;
    const age = enteredAge.current.value;
    const college = enteredCollege.current.value;
    if (name.trim().length === 0 || college.trim().length === 0|| age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty vlaues)",
      });
    } else if (age < 0) {
      setError({
        title: "Invalid Input",
        message: "Age must be > 0",
      });
    } else {
      const userDetails = {
        userName: name,
        userCollege: college,
        userAge: age,
      };
      props.addNewUser(userDetails);
      enteredName.current.value = '';
      enteredAge.current.value = '';
      enteredCollege.current.value = '';
    }
    
  };

  const hideError = () => {
    setError(null);
  };

  return (
    <div className="container border p-3 my-5 border-dark rounded bg-dark text-light" style={{ maxWidth: "600px" }}>
      <Form  onSubmit={userSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
          <Form.Control
            type="text"
            className="border-dark"
            ref={enteredName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>College/University</Form.Label>
          <Form.Control
            type="text"
            className="border-dark"
            ref={enteredCollege}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Age(Years)</Form.Label>
          <Form.Control
            type="number"
            className="border-dark"
            ref={enteredAge}
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
