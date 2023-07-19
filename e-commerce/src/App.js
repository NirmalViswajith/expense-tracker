import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  const productsArr = [
    {
      id:'e1',
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id:'e2',
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id:'e3',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id:'e4',
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  return (
    <CartProvider>
      {cartShow && <Cart products={productsArr} onClose={hideCartHandler} onRemoveCart={() => setCartItemCount((prevCount) => prevCount - 1)}/>}
      <NavBar onOpen={showCartHandler} cartItemCount={cartItemCount} />
      <Header />
      <Products
        productsArr={productsArr}
        onAddToCart={() => setCartItemCount((prevCount) => prevCount + 1)}
      />
    </CartProvider>
  );
}

export default App;