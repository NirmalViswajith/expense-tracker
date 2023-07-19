import React, { useReducer } from "react";
import CartContext from "./CartContext";

const CartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    if (existingItemIndex !== -1) {
      alert('Item is already added to the cart');
      return state;
    } else {
      const updatedItems = [...state.items, action.item];
      return {
        items: updatedItems,
      };
    }
  } else if (action.type === 'REMOVE_ITEM') {
    const updatedItems = state.items.filter((item) => item.id !== action.item.id);
    return {
      items: updatedItems,
    };
  }
};


const CartProvider = (props) => {
  const [cartState, dispatchItem] = useReducer(CartReducer, { items: [] });

  const addItemHandler = (item) => {
    dispatchItem({ type: 'ADD_ITEM', item: item });
  };

  const removeItemHandler = (item) => {
    dispatchItem({ type: 'REMOVE_ITEM', item: item });
  };

  const cart = {
    items: cartState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return (
    <CartContext.Provider value={cart}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;