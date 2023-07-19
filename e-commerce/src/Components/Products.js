import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../Store/CartContext";

const Products = (props) => {
  const ctx = useContext(CartContext);

  const music = props.productsArr.map((product) => (
    <div key={product.title} className="my-4">
      <h6 className="text-xl font-bold">{product.title}</h6>
      <p className="text-lg">${product.price}</p>
      <img src={product.imageUrl} alt="music" className="my-2 rounded" />
      <Button className="btn btn-primary" onClick={() => ctx.addItem(product)}>
        Add Products
      </Button>
    </div>
  ));

  return (
    <div className="container mx-auto">
      {music}
      <Button className="btn btn-primary">See Products</Button>
    </div>
  );
};

export default Products;
