import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const mailHandler = (event) => {
    setMail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordConfirmHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  const isPasswordMatch = password === confirmPassword;

  const isFormFilled =
    mail.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      email: mail,
      password: password,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR4pqugnslpdRrGntPXMBmg1o-FU1KU5w",
      {
        method: "POST",
        body: JSON.stringify({
          ...details,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          navigate('/login')
          return res.json();
        } else {
          throw new Error("Authentication Failed");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => alert(error));
    setMail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container
      className="border rounded shadow mt-5 bg-light"
      style={{ maxWidth: "550px", padding:'20px' }}
    >
      <div className="d-flex justify-content-center my-2 ">
        <h2>Sign Up</h2>
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="form-floating mb-2 shadow">
          <Form.Control
            type="email"
            placeholder="Enter E-mail"
            value={mail}
            onChange={mailHandler}
          />
          <Form.Label>Email</Form.Label>
        </Form.Group>
        <Form.Group className="form-floating mb-2 shadow">
          <Form.Control
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={passwordHandler}
            onFocus={togglePasswordVisibility}
            onBlur={togglePasswordVisibility}
          />
          <Form.Label>Password</Form.Label>
        </Form.Group>
        <Form.Group className="form-floating mb-2 shadow">
          <Form.Control
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={passwordConfirmHandler}
            onFocus={toggleConfirmPasswordVisibility}
            onBlur={toggleConfirmPasswordVisibility}
          />
          <Form.Label>Confirm Password</Form.Label>
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Button
            type="submit"
            disabled={!isPasswordMatch || !isFormFilled}
            className="btn-success shadow"
          >
            Sign Up
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link to="/login" className="text-decoration-none text-gray-500 hover:text-gray-900">
            Have an account? Login
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
