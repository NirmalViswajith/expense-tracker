import { useState, useEffect } from "react";
import { Navbar, Nav, NavLink, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction, themeAction } from "../Store/Store";

const Navigation = (props) => {
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state => state.authReducer.isAuthenticated);
  const isDarkTheme = useSelector(state => state.themeReducer.isDark);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    if(email && token){
      dispatch(authAction.login());
    }
  },[])
  const toggleTheme = () => {
    dispatch(themeAction.toggletheme());
  };

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
    dispatch(authAction.logout());
    navigate("/login");
  };

  return (
    <div className={`border-b-2 shadow ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
      <Container>
        <Navbar>
          <Navbar.Brand className={`${isDarkTheme ? 'text-light' : ''}`}>Expense Tracker</Navbar.Brand>
          <Nav className="mr-auto">
          {login && (
  <Link to="/home" className={`nav-link ${isDarkTheme ? 'text-light' : ''}`}>
    Home
  </Link>
)}
          </Nav>
          <Nav>
            {login && !isEmailVerificationSent && (
              <Button variant="outline-success me-2" onClick={verify}>
                Verify Email
              </Button>
            )}
            {!login ? (
              <Link
                to="/login"
                className="nav-link text-decoration-none text-orange-700 hover:text-orange-900"
              >
                Login
              </Link>
            ) : (
              <div className="d-flex align-items-center">
                <Button variant="none" onClick={toggleTheme}>
                  Toggle Theme
                </Button>
                <Button variant="none" onClick={logoutHandler}>
                  Logout
                </Button>
              </div>
            )}
          </Nav>
        </Navbar>
        {isEmailVerificationSent && (
          <div className="text-success">
            Verification email sent! Check your email to verify.
          </div>
        )}
        {verificationError && (
          <div className="text-danger">Error: {verificationError}</div>
        )}
      </Container>
    </div>
  );
};

export default Navigation;
