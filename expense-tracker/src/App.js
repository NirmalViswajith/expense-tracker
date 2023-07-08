import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExpense from "./components/Form/NewExpenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: Math.random().toString(),
      title: 'Toilet Paper',
      amount: 94.12,
      location: 'Bangalore',
      date: new Date(2020, 7, 14),
    },
    {
      id: Math.random().toString(),
      title: 'New TV',
      amount: 799.49,
      location: 'Bangalore',
      date: new Date(2021, 2, 12)
    },
    {
      id: Math.random().toString(),
      title: 'Car Insurance',
      amount: 294.67,
      location: 'Bangalore',
      date: new Date(2021, 2, 28),
    },
    {
      id: Math.random().toString(),
      title: 'New Desk (Wooden)',
      amount: 450,
      location: 'Bangalore',
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== expenseId);
    });
  };

  return (
    <Container fluid>
      <h1 className="text-center my-4">Expense Items</h1>
      <NewExpense saveData={addExpenseHandler} />
      <Card className="App">
        <Expenses expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
      </Card>
    </Container>
  );
}

export default App;