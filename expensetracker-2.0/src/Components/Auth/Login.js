import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [isText, setText] = useState(false);
  const [mail, setMail] = useState("");
  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setText((prevIsText) => !prevIsText);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      email: mail,
      password: password,
    };
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDR4pqugnslpdRrGntPXMBmg1o-FU1KU5w' , {
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
        props.login(true);
        navigate('/home');

        return res.json();
      } else {
        throw new Error('Login Failed')
      }
    }).then(data => localStorage.setItem('token', data.idToken)).catch((error) => alert(error));
    setMail("");
    setPassword("");
  };

  const isFilled = mail.trim() !== "" && password.trim() !== "";

  return (
    <Container
      className="border rounded shadow mt-5 bg-light"
      style={{ maxWidth: "550px", padding: "20px" }}
    >
      <div className="d-flex justify-content-center my-2">
        <h2>Login</h2>
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="form-floating mt-2">
          <Form.Control
            type="email"
            placeholder=""
            value={mail}
            onChange={mailHandler}
          />
          <Form.Label>Email</Form.Label>
        </Form.Group>
        <Form.Group className="form-floating mt-2 position-relative">
          <Form.Control
            type={!isText ? "password" : "text"}
            placeholder=""
            value={password}
            onChange={passwordHandler}
          />
          <Form.Label>Password</Form.Label>
          {isText ? (
            <FontAwesomeIcon
              icon={faEye}
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          )}
        </Form.Group>
        <div className="d-flex justify-content-center mt-3 ">
          <Button
            type="submit"
            variant="success"
            className="shadow"
            disabled={!isFilled}
          >
            Login
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link
            to="/updatePassword"
            className="text-decoration-none text-gray-500 hover:text-gray-900"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link
            to="/signup"
            className="text-decoration-none text-gray-500 hover:text-gray-900"
          >
            Don't have an account? Create one!
          </Link>
        </div>
        
      </Form>
    </Container>
  );
};

export default Login;
