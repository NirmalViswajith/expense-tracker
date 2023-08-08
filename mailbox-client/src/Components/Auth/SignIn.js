import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthAction } from '../ReduxStore/AuthReducer';
const SignIn = () => {
  const [mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async (event) => {
    event.preventDefault();
    const loginDetails = {
      email: mail,
      password: password
    }
    console.log(loginDetails);
    await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWOgewXwJ6MF_blTFfNdTdCj3c5sehREw", {
      method: 'POST',
      body: JSON.stringify({
        ...loginDetails,
        returnSecureToken: true
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Authentication failed');
      }
    }).then(data => {
      localStorage.setItem('email', data.email);
      localStorage.setItem('idToken', data.idToken);
      dispatch(AuthAction.login());
      navigate('/home')
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
    setmail('');
    setPassword('');
  }
  const isFilled = mail.trim() !== '' && password.trim() !== '';
  return (
    <div className='p-2'>
      <Container className='rounded shadow bg-light p-3' style={{ maxWidth: '650px' }}>
        <Form onSubmit={loginHandler}>
          <div className='d-flex justify-content-center align-items-center'>
            <h1>
              Login
            </h1>
          </div>
          <Form.Group className='form-floating mb-3'>
            <Form.Control type='email' placeholder='' value={mail} onChange={(event) => setmail(event.target.value)}>
            </Form.Control>
            <Form.Label>Enter MailId:</Form.Label>
          </Form.Group>
          <Form.Group className='form-floating mb-3'>
            <Form.Control type='password' placeholder='' value={password} onChange={(event) => setPassword(event.target.value)}>
            </Form.Control>
            <Form.Label>Enter Password:</Form.Label>
          </Form.Group>
          <div className='d-flex justify-content-center '>
            <Button type='submit' variant='success' className='mt-3' disabled={!isFilled}>Login</Button>
          </div>
          <div className='d-flex justify-content-center'>
            <Link to='/' className="text-decoration-none text-gray-500 hover:text-gray-900">
              Don't have an account? Create one!
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default SignIn;