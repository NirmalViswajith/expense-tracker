import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAction, MailAction } from "../ReduxStore/AuthReducer";
import { useEffect } from "react";

const Header = () => {
  const auth = useSelector(state => state.auth.isAuth);
  const unRead=useSelector(state=>state.mail.unRead);
  const mailData = useSelector(state => state.mail.mails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(AuthAction.logout());
    navigate('/');
  }
  const myEmail = localStorage.getItem('email').replace(/[@.]/g,'');
  useEffect(() => {
    let unRead = 0;
    const fetchData = async () => {
      try{
        const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${myEmail}.json`);
        const data = await response.json();
        for(let key in data){
          if(data[key].isSeen){
            unRead++;
          }
        }
        dispatch(MailAction.updateUnread(unRead));
      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>MailBox Client</Navbar.Brand>
        <Nav className="ml-auto">
          {auth && <Link to="/send" className="nav-link text-light">
            send
          </Link>}
          {auth && <Link to="/inbox" className="nav-link text-light">
            Inbox {unRead}
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