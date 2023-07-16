import Model from "./Modal";
import Button from "react-bootstrap/Button";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "sushi", quantity: "2", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model>
      {cartItems}
      <div className="d-flex justify-content-between">
        <h4>Total Amount</h4>
        <h4>35.62</h4>
      </div>
      <div className="d-flex justify-content-end">
        <Button variant="dark" className="mr-2" onClick={props.onClose}>Close</Button>
        <Button variant="primary">Order</Button>
      </div>
    </Model>
  );
};

export default Cart;