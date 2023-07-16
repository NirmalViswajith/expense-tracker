import React, { useReducer } from "react";
import CartContext from "./cartContext";

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingItemIndex !== -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      return {
        items: updatedItems,
      };
    } else {
      const updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
      };
    }
  }

  if (action.type === "DECREASE_QUANTITY") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (existingItemIndex !== -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedQuantity = existingItem.quantity - 1;

      if (updatedQuantity === 0) {
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        return {
          items: updatedItems,
        };
      }

      const updatedItem = {
        ...existingItem,
        quantity: updatedQuantity,
      };
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      return {
        items: updatedItems,
      };
    }
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const decreaseQuantityHandler = (id) => {
    dispatchCartAction({ type: "DECREASE_QUANTITY", id: id });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemHandler,
    decreaseQuantity: decreaseQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
