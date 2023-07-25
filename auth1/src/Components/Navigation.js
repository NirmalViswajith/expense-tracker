import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container className="">
      <Navbar>
        <Navbar.Brand>React Authentication</Navbar.Brand>
        <Nav>
          <Link
            to="/login"
            className="text-dark mx-2 hover:text-gray-300 no-underline"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="text-dark mx-2 hover:text-gray-300 no-underline"
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className="text-dark mx-2 hover:text-gray-300 no-underline"
          >
            Logout
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Navigation;
