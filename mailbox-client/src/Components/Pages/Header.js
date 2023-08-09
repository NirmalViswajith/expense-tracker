import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAction } from "../ReduxStore/AuthReducer";

const Header = () => {
  const auth = useSelector(state => state.auth.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(AuthAction.logout());
    navigate('/');
  }
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>MailBox Client</Navbar.Brand>
        <Nav className="ml-auto">
          {auth && <Link to="/send" className="nav-link text-light">
            send
          </Link>}
          {auth && <Link to="/inbox" className="nav-link text-light">
            Inbox
          </Link>}
          {auth && <Link to="/logout" className="nav-link text-light" onClick={logOutHandler}>
            Logout
          </Link>}
          {!auth && <Link to="/" className="nav-link text-light">
            Login/SignUp?
          </Link>}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;