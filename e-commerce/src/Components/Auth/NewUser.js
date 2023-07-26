import React, {useRef, useContext} from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthProvider from "../../TokenStore/AuthProvider";
import AuthContext from "../../TokenStore/AuthContext";


const NewUser = (props) => {
  const ctx = useContext(AuthContext);
  const enteredmail = useRef();
  const enteredPassword = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      email: enteredmail.current.value,
      password: enteredPassword.current.value
    };
  
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVcofVy7VOCY-0fnKpXJkpsNfOZXjxbOA', {
      method: 'POST',
      body: JSON.stringify({
        ...details,
        returnSecureToken: true,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
     
    }).then((data) => ctx.addToken(data.idToken)).catch((err) => {
      console.error(err);
      alert("Authentication failed!");
    });
  };
  
  return (
    <div>
      <Container>
        <Form className="shadow p-4 rounded-lg bg-light my-2" style={{ maxWidth: "400px", margin: "auto" }} onSubmit={submitHandler}>
          <h1> Sign up</h1>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={enteredmail} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={enteredPassword}/>
          </Form.Group>
          <div className=" d-grid text-center my-2">
            <Button type="submit" className="btn btn-primary">Create Account</Button>
            <Link to='/login' className="text-dark no-underline mt-2" onClick={()=> props.exist(true)}>existig user?</Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default NewUser;
