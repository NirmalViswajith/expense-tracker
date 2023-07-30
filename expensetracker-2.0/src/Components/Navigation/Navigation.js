import { useState } from "react";
import { Navbar, Nav, NavLink, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const navigate = useNavigate();
  const verify = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDR4pqugnslpdRrGntPXMBmg1o-FU1KU5w",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: localStorage.getItem("token"),
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          setIsEmailVerificationSent(true);
          setVerificationError("");
        } else {
          response.json().then((data) => {
            setIsEmailVerificationSent(false);
            setVerificationError(data.error.message);
          });
        }
      })
      .catch((error) => {
        setIsEmailVerificationSent(false);
        setVerificationError("Failed to send verification email.");
      });
  };

  const logoutHandler = () => {
    props.login(false);
    props.logout();
    props.navigate("/login");
  };

  return (
    <div className="border-b-2 shadow">
      <Container>
        <Navbar>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          <Nav className="mr-auto">
            {props.isLogged && (
              <Link to="/home" className="nav-link">
                Home
              </Link>
            )}
          </Nav>
          <Nav>
            {props.isLogged && !isEmailVerificationSent && (
              <Button variant="outline-success me-2" onClick={verify}>
                Verify Email
              </Button>
            )}
            {!props.isLogged ? (
              <Link
                to="/login"
                className="nav-link text-decoration-none text-orange-700 hover:text-orange-900"
              >
                Login
              </Link>
            ) : (
              <Button
                variant="none"
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
          </Nav>
          {isEmailVerificationSent && (
            <div className="text-success">
              Verification email sent! Check your email to verify.
            </div>
          )}
          {verificationError && (
            <div className="text-danger">Error: {verificationError}</div>
          )}
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;