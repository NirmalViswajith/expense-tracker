import React, { useReducer, useContext, useEffect } from "react";
import CartContext from "./CartContext";
import AuthContext from "../TokenStore/AuthContext";

const url = 'https://crudcrud.com/api/059cd864d88c40729ed269a65d9bbf9e';
const CartReducer = async (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    if (existingItemIndex !== -1) {
      alert('Item is already added to the cart');
      return state;
    } else {
      const updatedItems = [...state.items, action.item];  
      const data = await savetoapi(action.item.id,action.item.title,action.item.price,action.item.imageUrl,action.item.reviews); 
      console.log(data);  
      return {
        items: updatedItems,
      };
    }
  } else if (action.type === 'REMOVE_ITEM') {
    const updatedItems = state.items.filter((item) => item.id !== action.item.id);
    return {
      items: updatedItems,
    };
  } else if (action.type === 'FETCH_ITEMS') {
    return {
      items: action.items,
    };
  }
};

const savetoapi = async(id,title,price,imageUrl,reviews) => {
  const email = localStorage.getItem('email');
  try {
    const res = await fetch(`${url}/${email}`, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        title: title,
        price: price,
        img: imageUrl,
        reviews: reviews,
        quantity: 1
      }),
      headers: {
        'Custom-type' : 'application/json'
      }
    });
    console.log('added')
  } catch(err) {
    console.log(err);
  }
}




const CartProvider = (props) => {
  const [cartState, dispatchItem] = useReducer(CartReducer, { items: [] });
  const authCtx = useContext(AuthContext);

  const addItemHandler = (item) => {
    console.log(item);
    dispatchItem({ type: 'ADD_ITEM', item: item, userEmail: authCtx.email });
  };

  const removeItemHandler = (item) => {
    dispatchItem({ type: 'REMOVE_ITEM', item: item, userEmail: authCtx.email });
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
