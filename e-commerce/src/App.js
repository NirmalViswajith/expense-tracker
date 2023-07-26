import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Components/StorePage/NavBar";
import Header from "./Components/StorePage/Header";
import Products from "./Components/StorePage/Products";
import Cart from "./Components/UI/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Components/AboutPage/About";
import HomePage from "./Components/HomePage/HomePage";
import ContactUs from "./Components/ContactPage/ContactUs";
import ProductDetails from "./Components/StorePage/ProductDetails";
import Login from "./Components/Auth/Login";
import NewUser from "./Components/Auth/NewUser";
import AuthProvider from "./TokenStore/AuthProvider";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [details, setDetails] = useState([]);
  const [existingUser, setExistingUser] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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
      reviews: [
        "Review 1: Awesome. The singer and composer nailed it",
        "Review 2: Woowwwwwww",
      ],
    },
    {
      id: "e2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      reviews: ["Review 1: Feel Good Music", "Review 2: Awesome product"],
    },
    {
      id: "e3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      reviews: ["Review 1: Not that good", "Review 2: Average"],
    },
    {
      id: "e4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      reviews: ["Review 1: Not that good", "Review 2: Average"],
    },
  ];

  if (window.location.pathname === "/") {
    navigate("/home");
  }
  async function postHandler(details) {
    const response = await fetch(
      "https://react-app-b039c-default-rtdb.firebaseio.com/customer_details.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to store customer details");
    }
    const data = await response.json();
    setDetails(data);
  }

  return (
    <AuthProvider>
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
                onAddToCart={() =>
                  setCartItemCount((prevCount) => prevCount + 1)
                }
              />
            }
            exact
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs post={postHandler} />} />
          <Route
            path="/store/:productId"
            element={<ProductDetails products={productsArr} />}
          />
          <Route
            path="/login"
            element={<Login createAcc={setExistingUser} />}
          />
          <Route
            path="/login/createAcc"
            element={<NewUser exist={setExistingUser} />}
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
