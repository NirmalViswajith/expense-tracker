import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAction } from "../ReduxStore/AuthReducer";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <h1>Welcome to MailBox Client</h1>

      </div>
      <div className="d-flex justify-content-center">
        <Button onClick={() => navigate('/send')}>Send Mail</Button>
      </div>
    </div>
  );
};

export default Home;
