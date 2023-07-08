import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import UserButton from "./UserButton";
import Error from "./Error";

const UserForm = (props) => {
  const [error, setError] = useState({
    title: "noerror",
    message: 'nomessage'
  });
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const userName = (event) => {
    setName(event.target.value);
  };

  const userAge = (event) => {
    setAge(event.target.value);
  };

  const userSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 && enteredAge === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age'
      });
      setErrorVisible(true);
      return;
    } else if (enteredAge < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Age must be > 0'
      });
      setErrorVisible(true);
      return;
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

  const handleOkayClick = () => {
    setErrorVisible(false);
  };

  return (
    <div
      className="container border p-3 my-5 border-dark rounded bg-dark text-light"
      style={{ maxWidth: "600px" }}
    >
      <Form style={{ maxWidth: "700px" }} onSubmit={userSubmit}>
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
      {errorVisible && (
        <div>
          <Error title={error.title} message={error.message} onOkayClick={handleOkayClick} />
        </div>
      )}
    </div>
  );
};

export default UserForm;
