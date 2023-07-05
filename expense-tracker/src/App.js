import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExpense from "./components/Form/NewExpenses";


function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      location: 'Banglore',
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      location: 'Banglore',
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      location: 'Banglore',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      location: 'Banglore',
      date: new Date(2021, 5, 12),
    }
  ]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses]});
  };

  

  return (
    <Container fluid>
      <h1 className="text-center my-4">Expense Items</h1>
      <NewExpense saveData={addExpenseHandler} />
      <Card className="App">
        <Expenses expenses={expenses} />
      </Card>
    </Container>
  );
}

export default App;
