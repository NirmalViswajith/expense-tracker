import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CartContext from '../Store/cartContext';
import Modal from './Modal';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <div key={item.id}>
      <li className="flex justify-between">
        <div>
          <h4>{item.name}</h4>
          <p className="text-base">{item.amount}</p>
        </div>
        <div className="flex items-center">
          <Button onClick={() => cartCtx.decreaseQuantity(item.id)} className="btn-sm mx-2">
            -
          </Button>
          <span>{item.quantity}</span>
          <Button onClick={() => cartCtx.addItem({ ...item, quantity: 1 })} className="btn-sm mx-2">
            +
          </Button>
        </div>
      </li>
      <hr />
    </div>
  ));

  const totalAmount = cartCtx.items.reduce((total, item) => {
    const itemAmount = parseFloat(item.amount.replace('$', ''));
    return total + itemAmount * item.quantity;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      <div className="p-2 w-96 transition-all duration-300">
        <ul>{cartItems}</ul>
        <div className="flex justify-between">
          <h4>Total Amount</h4>
          <h4>${totalAmount.toFixed(2)}</h4>
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="dark" className="mr-2" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary">Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
