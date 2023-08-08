import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [created, setCreated] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    const details = {
      email: mail,
      password: password,
    }
    console.log(details);
    await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWOgewXwJ6MF_blTFfNdTdCj3c5sehREw', {
      method: 'POST', 
      body: JSON.stringify({
        ...details,
        returnSecureToken: true
      }), 
      headers: {
        'Content-type' : 'application/json',
      }
    }).then((res) => {
      if(res.ok) {  
        setCreated(true);
        return res.json()
      } else {
        throw new Error('Authentication failed');
      }
    }).then((data) => {
      console.log(data);
    }).catch(err => console.log(err));
    setMail('');
    setPassword('');
    setConfirmPassword('');
  }

  const correctPassword = password === confirmPassword;
  const inputFilled = mail.trim() !== '' && password !== '' && confirmPassword !== '';

  return (
    <div className='p-2 backdrop-filter backdrop-blur bg-opacity-20 '>
      <Container className=' rounded shadow p-3 my-5 bg-light' style={{ maxWidth: '650px' }}>
        <div className='d-flex justify-content-center align-items-center mb-3'>
          <h1>Sign Up</h1>
        </div>
        <Form onSubmit={submitHandler} >
          <Form.Group className='form-floating mb-3'>
            <Form.Control type='email' id='entermail' placeholder='entermail' value={mail} onChange={(event) => setMail(event.target.value)} />
            <Form.Label htmlFor='entermail'>Enter MailID</Form.Label>
          </Form.Group>
          <Form.Group className='form-floating mb-3'>
            <Form.Control type='password' id='enterpassword' placeholder='enterpassword' value={password} onChange={(event) => setPassword(event.target.value)} />
            <Form.Label htmlFor='enterpassword'>Enter Password</Form.Label>
          </Form.Group>
          <Form.Group className='form-floating mb-2'>
            <Form.Control type='password' id='confirmpassword' placeholder='confirmpassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
            <Form.Label htmlFor='confirmpassword'>Confirm Password</Form.Label>
          </Form.Group>
          <div className='d-flex justify-content-center mt-3'>
            <Button variant='success' type='submit' className='rounded' disabled={!inputFilled || !correctPassword}>Create Account</Button>
          </div>
          <div className='d-flex justify-content-center'>
            <Link to="/login"
            className="text-decoration-none text-gray-500 hover:text-gray-900">have account? sign in!</Link>
          </div>
          {created && <p>Account Created </p>}
        </Form>
      </Container>
    </div>
  );
}

export default SignUp;
