import React, { useState } from "react";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from "./Components/Summary";
import Cart from "./Components/UI/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  const foodItems = [
    {
      id: 'e1',
      name: "Sushi",
      description: "Finest fish and veggies",
      amount: "$22.99",
    },
    {
      id: 'e2',
      name: "Schnitzel",
      description: "A German Speciality!!!",
      amount: "$16.50",
    },
    {
      id: 'e3',
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      amount: "$12.99",
    },
    {
      id: 'e4',
      name: "Green Bowl",
      description: "Healthy.... and green...",
      amount: "$18.99",
    },
  ];

  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Summary items={foodItems} />
      </main>
    </CartProvider>
  );
}

export default App;
