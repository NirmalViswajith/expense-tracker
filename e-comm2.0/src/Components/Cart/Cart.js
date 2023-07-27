import React, { Fragment, useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import cartContext from "../Conrext-store/CartContext";
import "./Cart.css";


function Cart() {
  const [show, setShow] = useState(false);
  const ctx = useContext(cartContext);

  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

const removeHandler=(id)=>{
ctx.removeFromCart(id)
console.log(id);
}

  
  
  
  const totalAmount=ctx.items.reduce((curr,item)=>curr+item.price,0)

 
  return (
    <div className="cart-container">
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="cart-modal-title">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-main-div">
            <div className="cart-sub-head-first">ITEM</div>
            <div className="cart-sub-head-second">PRICE</div>
            <div className="cart-sub-head-third">QUANTITY</div>
          </div>
          {ctx.items.map((item) => (
            <div className="cart-item-div" key={item.id}>
              <div className="cart-item-first">
                <div className="cart-item-first-img">
                  <img src={item.img} />
                </div>
                <div className="cart-item-first-title">{item.title}</div>
              </div>
              <div className="cart-item-second">${item.price}</div>
              <div className="cart-item-third">
                <div className="cart-item-third-qty">1</div>
                <Button variant="primary" onClick={removeHandler.bind(null,item._id)} className="cart-remove-btn">
                  Remove
                </Button>
              </div>
            </div>
          ))};
        </Modal.Body>
        <Modal.Footer>
          <div className="cart-footer">
            <Button variant="primary">PURCHASE</Button>
            <div className="cart-total-div">Total ${totalAmount}</div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
