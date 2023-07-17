import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CartContext from "./Store/cartContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);

  return (
    <div className="bg-red" style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}>
      <Container className="d-flex justify-between align-items-center">
        <h1 className="text-xlg text-white">ReactMeals</h1>
        <Button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 d-flex align-items-center btn-warning" onClick={props.onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <h1 className="text-base mb-0">Your Cart</h1>
          <div className="badge rounded-pill bg-orange ml-2">
            {numberOfItems}
          </div>
        </Button>
      </Container>
    </div>
  );
};

export default Header;
