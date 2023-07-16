import React from "react";
import Container from "react-bootstrap/Container";
import resImg from './restaurant.webp';
import FoodMenu from "./FoodMenu";

const Summary = (props) => {
  return (
    <div style={{
      backgroundImage: `url(${resImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
    }}>
      <Container className="border rounded mb-10 bg-zinc text-white text-center drop-shadow-2xl p-3" style={{ maxWidth: '600px' }}>
        <h1>Delicious Food, Delivered To you</h1>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
      </Container>
      <FoodMenu items={props.items} />
    </div>
  );
};

export default Summary;
