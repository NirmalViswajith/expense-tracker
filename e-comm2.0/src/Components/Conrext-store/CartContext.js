import React from "react";

const cartContext = React.createContext({
  items: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default cartContext;
