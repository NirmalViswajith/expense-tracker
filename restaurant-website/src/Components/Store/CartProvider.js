import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemHandler = (item) => {
    setCartItems((prevCartItems) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
  
      if (existingItemIndex !== -1) {
        // Item already exists, update its amount
        const updatedCartItems = [...prevCartItems];
        const existingAmount = parseFloat(updatedCartItems[existingItemIndex].amount);
        const newAmount = parseFloat(item.amount);
        updatedCartItems[existingItemIndex].amount = `${(existingAmount + newAmount).toFixed(2)}`;
        return updatedCartItems;
      } else {
        // Item doesn't exist, add it to the cart
        return prevCartItems.concat(item);
      }
    });
  };
  

  const removeItemHandler = (id) => {
    setCartItems((prevCartItems) => {
      // Filter out the item with the given id
      const updatedCartItems = prevCartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      return updatedCartItems;
    });
  };

  const cartContext = {
    items: cartItems,
    totalAmount: 0, // Update the total amount calculation if needed
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
