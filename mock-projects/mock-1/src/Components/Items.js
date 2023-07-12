import React from "react";
import ItemsList from "./ItemsList";
import Container from "react-bootstrap/Container";

const Items = (props) => {
  const electronicItems = [];
  const foodItems = [];
  const skincareItems = [];

  props.products.map((product) => {
    const item = (
      <ItemsList
        key={product.id}
        id={product.id}
        amount={product.amount}
        name={product.name}
        category={product.category}
        onDelete={() => props.onDelete(product.id)} // Pass the onDelete function correctly
      />
    );

    if (product.category === "Electronic Items") {
      electronicItems.push(item);
    } else if (product.category === "Food Items") {
      foodItems.push(item);
    } else if (product.category === "Skincare Items") {
      skincareItems.push(item);
    }
  });

  return (
    <Container>
      <div>
        <h1>Electronic Items</h1>
        <ul>{electronicItems}</ul>
      </div>
      <div>
        <h1>Food Items</h1>
        <ul>{foodItems}</ul>
      </div>
      <div>
        <h1>Skincare Items</h1>
        <ul>{skincareItems}</ul>
      </div>
    </Container>
  );
};

export default Items;
