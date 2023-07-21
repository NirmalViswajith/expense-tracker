import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/StorePage/NavBar";
import Header from "./Components/StorePage/Header";
import Products from "./Components/StorePage/Products";
import Cart from "./Components/UI/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Components/AboutPage/About";
import HomePage from "./Components/HomePage/HomePage";
import ContactUs from "./Components/ContactPage/ContactUs";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [details, setDetails] = useState([]);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  const productsArr = [
    {
      id: "e1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "e2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "e3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "e4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  async function postHandler(details) {
    const response = await fetch(
      "https://react-app-b039c-default-rtdb.firebaseio.com/customer_details.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json", // Fixed the header name
        },
      }
    );
    const data = await response.json(); // Parse the response
    setDetails(data);
  }

  return (
    <CartProvider>
      {cartShow && (
        <Cart
          products={productsArr}
          onClose={hideCartHandler}
          onRemoveCart={() => setCartItemCount((prevCount) => prevCount - 1)}
        />
      )}
      <NavBar onOpen={showCartHandler} cartItemCount={cartItemCount} />
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/store"
          element={
            <Products
              productsArr={productsArr}
              onAddToCart={() => setCartItemCount((prevCount) => prevCount + 1)}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs post={postHandler}/>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
