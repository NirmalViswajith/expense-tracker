import { useState } from "react";
import { Navbar, Nav, NavLink, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  const verify = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDR4pqugnslpdRrGntPXMBmg1o-FU1KU5w', {
      method: 'POST',
      body: JSON.stringify({
        requestType: 'VERIFY_EMAIL',
        idToken: localStorage.getItem('token')
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          setIsEmailVerificationSent(true);
          setVerificationError('');
        } else {
          response.json().then((data) => {
            setIsEmailVerificationSent(false);
            setVerificationError(data.error.message);
          });
        }
      })
      .catch((error) => {
        setIsEmailVerificationSent(false);
        setVerificationError('Failed to send verification email.');
      });
  };

  return (
    <div className="border-b-2 shadow">
      <Container>
        <Navbar>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          <Nav>
            {props.isLogged && (
              <Link to="/home" className="nav-link">
                Home
              </Link>
            )}
            {!props.isLogged ? (
              <Link
                to="/login"
                className="nav-link text-decoration-none text-orange-700 hover:text-orange-900 mx-2"
              >
                Login
              </Link>
            ) : (
              <Link
                to="/"
                className="nav-link text-decoration-none text-orange-700 hover:text-orange-900 mx-2"
                onClick={() => props.login(false)}
              >
                Logout
              </Link>
            )}
          </Nav>
          {props.isLogged && !isEmailVerificationSent && (
            <Button variant="outline-success" onClick={verify}>
              Verify Email
            </Button>
          )}
          {isEmailVerificationSent && (
            <div className="text-success">Verification email sent! Check your email to verify.</div>
          )}
          {verificationError && <div className="text-danger">Error: {verificationError}</div>}
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;
