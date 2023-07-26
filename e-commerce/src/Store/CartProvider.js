import React, { useReducer, useContext, useEffect } from "react";
import CartContext from "./CartContext";
import AuthContext from "../TokenStore/AuthContext";


const CartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    if (existingItemIndex !== -1) {
      alert('Item is already added to the cart');
      return state;
    } else {
      const updatedItems = [...state.items, action.item];
      saveCartItemsToBackend(updatedItems, action.userEmail);
      return {
        items: updatedItems,
      };
    }
  } else if (action.type === 'REMOVE_ITEM') {
    const updatedItems = state.items.filter((item) => item.id !== action.item.id);
    saveCartItemsToBackend(updatedItems, action.userEmail);
    return {
      items: updatedItems,
    };
  } else if (action.type === 'FETCH_ITEMS') {
    return {
      items: action.items,
    };
  }
};

const url = 'https://crudcrud.com/api/c7b7d01abbfb4ba99165722fe8612b62'
async function saveCartItemsToBackend(cartItems, userEmail) {
  try {
    if (typeof userEmail === "string" && userEmail.trim() !== "") {
      const modifiedEmail = userEmail.replace(/[@.]/g, ''); // Remove "@" and "."
      await fetch(url + `/cart${modifiedEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
    } else {
      console.error('Invalid userEmail:', userEmail);
    }
  } catch (error) {
    console.error('Failed to save cart items to backend:', error);
  }
}

async function fetchCartItemsFromBackend(userEmail, dispatch) {
  try {
    if (typeof userEmail === "string" && userEmail.trim() !== "") {
      const modifiedEmail = userEmail.replace(/[@.]/g, ''); // Remove "@" and "."
      const response = await fetch(url + `/cart${modifiedEmail}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart items from backend');
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_ITEMS', items: data });
    } else {
      console.error('Invalid userEmail:', userEmail);
      dispatch({ type: 'FETCH_ITEMS', items: [] });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: 'FETCH_ITEMS', items: [] });
  }
}


const CartProvider = (props) => {
  const [cartState, dispatchItem] = useReducer(CartReducer, { items: [] });
  const authCtx = useContext(AuthContext);

  const addItemHandler = (item) => {
    dispatchItem({ type: 'ADD_ITEM', item: item, userEmail: authCtx.email });
  };

  const removeItemHandler = (item) => {
    dispatchItem({ type: 'REMOVE_ITEM', item: item, userEmail: authCtx.email });
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      fetchCartItemsFromBackend(authCtx.email, dispatchItem);
    }
  }, [authCtx.isLoggedIn, authCtx.email]);

  useEffect(() => {
    saveCartItemsToBackend(cartState.items, authCtx.email);
  }, [cartState.items, authCtx.email]);

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
