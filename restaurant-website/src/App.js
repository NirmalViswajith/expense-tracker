import React from "react";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from "./Components/Summary";
import Cart from "./Components/UI/Cart";



function App() {
  const foodItems = [
    {
      id : Math.random().toString(), 
      name : 'Sushi',
      description : 'Finest fish and veggies',
      amount : '$22.99'
    },
    {
      id : Math.random().toString(), 
      name : 'Schnitzel',
      description : 'A German Speciality!!!',
      amount : '$16.50'
    },
    {
      id : Math.random().toString(), 
      name : 'Barbecue Burger',
      description : 'American, raw, meaty',
      amount : '$12.99'
    },
    {
      id : Math.random().toString(), 
      name : 'Green Bowl',
      description : 'Healthy.... and green...',
      amount : '$18.99'
    }
  ];

  return (
    <div className="App">
      <Cart />
      <Header />
      <Summary items={foodItems} />
    </div>
  );
}

export default App;
