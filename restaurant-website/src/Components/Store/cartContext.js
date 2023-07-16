import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  decreaseQuantity: (id) => {},
});

export default CartContext;
