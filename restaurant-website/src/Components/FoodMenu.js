import React from "react";
import Container from 'react-bootstrap/Container';
import FoodList from "./FoodList";

const FoodMenu = (props) => {
  const items = props.items.map((food) => (
    <FoodList 
      key={food.id}
      id={food.id}
      name={food.name}
      description={food.description}
      amount={food.amount}
    />
  ));

  return (
    <Container className=' rounded p-2 shadow my-2 mb-0 bg-light' style={{ maxWidth:'700px' }}>
      <ul>{items}</ul>
    </Container>
  );
};

export default FoodMenu;
