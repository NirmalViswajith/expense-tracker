import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      <Container className=" border-b-2 shadow">
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
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;
