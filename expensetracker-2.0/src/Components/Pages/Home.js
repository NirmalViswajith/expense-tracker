import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <Container className="d-flex justify-content-between">
      <h1 className="text-xl">Welcome to Expense Tracker!!</h1>
      <div>
        <h3 className="text-base">Your Profile is inComplete.<Link to='/updateprofile' className="text-dark">Complete Now</Link></h3>
      </div>
    </Container>
  );
}

export default Home;