import React, { useContext, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthProvider from "../../TokenStore/AuthProvider";
import AuthContext from "../../TokenStore/AuthContext";

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const enterdEmail = useRef();
  const enteredPassword = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const mailHandler = enterdEmail.current.value;
    const passwordHandler = enteredPassword.current.value;
    const details = {
      email: mailHandler,
      password: passwordHandler
    }
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVcofVy7VOCY-0fnKpXJkpsNfOZXjxbOA', {
      method: 'POST',
      body: JSON.stringify({
        ...details,
        returnSecureToken: true
      }),
      headers: {
        'Content-type' : 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    }).then((data) => ctx.addToken(data.idToken)).catch((err) => alert(err))
  }
  return (
    <div>
      <Container>
        <Form className="shadow p-4 rounded-lg bg-light my-2" style={{ maxWidth: "400px", margin: "auto" }} onSubmit={submitHandler}>
          <h1> Login</h1>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={enterdEmail}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={(enteredPassword)}/>
          </Form.Group>
          <div className="d-grid text-center my-4">
            <Button type="submit" className="btn btn-primary">Login</Button>
            <Link to="createAcc" className='text-dark no-underline mt-4' onClick={() => props.createAcc(false)}>Create a new Account</Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
