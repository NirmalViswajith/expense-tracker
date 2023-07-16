import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../Store/cartContext";
import Modal from "./Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <div key={item.id}>
      <li className="d-flex justify-between">
        <div>
          <h4>{item.name}</h4>
          <p className="text-base">{item.amount}</p>
        </div>
        <div className="justify-end">
          <Button
            onClick={() => cartCtx.decreaseQuantity(item.id)}
            className="btn-sm mx-2"
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            onClick={() => cartCtx.addItem({ ...item, quantity: 1 })}
            className="btn-sm mx-2"
          >
            +
          </Button>
        </div>
      </li>
      <hr />
    </div>
  ));

  const totalAmount = cartCtx.items.reduce((total, item) => {
    const itemAmount = parseFloat(item.amount.replace("$", ""));
    return total + itemAmount * item.quantity;
  }, 0);

  const orderHandler = () => {
    console.log("Order Placed!");
    console.log("Items in the cart:");
    cartCtx.items.forEach((item) => {
      console.log(item.name, " - Quantity:", item.quantity);
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItems}</ul>
      <div className="d-flex justify-content-between">
        <h4>Total Amount</h4>
        <h4>${totalAmount.toFixed(2)}</h4>
      </div>
      <div className="d-flex justify-content-end">
        <Button variant="dark" className="mr-2" onClick={props.onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={orderHandler}>
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
