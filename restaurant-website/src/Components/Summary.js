import { Container } from "react-bootstrap";

const Summary = () => {
  return (
    <Container className="border rounded my-10 bg-zinc text-white text-center drop-shadow-2xl p-3" style={{ maxWidth: '600px' }}>
      <h1>Delicious Food, Delivered To you</h1>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
      <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
    </Container>
  );
};

export default Summary;
