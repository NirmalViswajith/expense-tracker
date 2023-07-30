import { Button, Container, Form } from "react-bootstrap";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDR4pqugnslpdRrGntPXMBmg1o-FU1KU5w', {
      method:'POST',
      body: JSON.stringify({
        requestType: 'PASSWORD_RESET',
        email: email
      })
    }).then((res) => {
      if(res.ok){
        console.log('verification sent');
      } else {
        throw new Error('Email not found');
      }
    }).catch(err => console.log(err));
    navigate('/login');
  }
  return(
    <Container className="border rounded p-2 mt-5 shadow">
      <Form onSubmit={submitHandler}>
        <Form.Group className="form-floating">
          <Form.Control type="email" placeholder="" value={email} onChange={(event) => setEmail(event.target.value)}></Form.Control> 
          <Form.Label>Enter Your Email</Form.Label>
        </Form.Group>
        <div className="d-flex justify-content-center mt-2">
        <Button type="submit" >Send Link</Button>
        </div>
      </Form>
    </Container>
  );
}

export default UpdatePassword;