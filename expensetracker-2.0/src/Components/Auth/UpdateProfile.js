import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      idToken: localStorage.getItem('token'),
      displayName: name,
      photoUrl: img
    }
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDR4pqugnslpdRrGntPXMBmg1o-FU1KU5w', {
      method: 'POST',
      body: JSON.stringify({
        ...details,
        returnSecureToken: true
      }),
      headers: {
        'Content-type' : 'application/json'
      }
    }).then((res) => {
      if(res.ok){
        return res.json();
      } else {
        throw new Error('Failed to update')
      }
    }).then(data => console.log(data)).catch((error) => {
      alert(error);
    })
    setName('');
    setImg('');
  }
  return (
    <div>
      <div>
        <Container className="d-flex justify-content-Center">
        <p className="mt-5">Your Profile is 64% completed, A complete Profile has higher chances of landing a job. <a href='#'>Complete Now.</a></p>
        </Container>
      </div>
      <div>
      <Container className="border rounded shadow p-4 mt-5 bg-light" style={{maxWidth: '600px'}}>
      <div className="d-flex justify-content-center">
        <h1>Contact Details</h1>
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Enter your name: </Form.Label>
          <Form.Control type="text" placeholder="" className="border-b" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter image URL: </Form.Label>
          <Form.Control type="text" placeholder="https://example.com/image.jpg" value={img} onChange={(event) => setImg(event.target.value)} />
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">
          <Button type="submit" variant="primary" className="mx-2">
            Update Profile
          </Button>
          <Button variant="danger">Cancel</Button>
        </div>
      </Form>
    </Container>
      </div>
    </div>
  );
};

export default UpdateProfile;
