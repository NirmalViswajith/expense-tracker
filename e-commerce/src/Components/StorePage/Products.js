import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../Store/CartContext";
import './products.css';
import AuthContext from "../../TokenStore/AuthContext";

const Products = (props) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  if (!authCtx.isLoggedIn) {
    navigate("/login"); 
    return null; 
  }

  const music = props.productsArr.map((product) => (
    <div key={product.id} className="col-md-4 my-4">
      <Card>
        <Card.Body>
          <h6 className="text-xl font-bold">{product.title}</h6>
          <p className="text-lg">${product.price}</p>
          <Link to={`/store/${product.id}`}>
            <img
              src={product.imageUrl}
              alt="music"
              className="my-2 rounded zoom-image" // Apply the zoom effect class
            />
          </Link>
          <Button
            className="btn btn-primary"
            onClick={() => {
              props.onAddToCart(product);
              ctx.addItem(product);
            }}
          >
            Add Products
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div className="container mx-auto">
      <div className="row">{music}</div>
      <div className="text-center my-4">
        <Button className="btn btn-primary">See Products</Button>
      </div>
    </div>
  );
};

export default Products;
