import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExpense from "./components/Form/NewExpenses";


function App() {
  const [expenses, setExpenses] = useState([
    {
      date: new Date(2021, 4, 21),
      title: "Car Insurance",
      amount: "$1000",
      location: "Bangalore",
    },
    {
      date: new Date(2021, 4, 22),
      title: "Hotel",
      amount: "$870",
      location: "Bangalore",
    },
    {
      date: new Date(2023, 4, 23),
      title: "Shopping",
      amount: "$10000",
      location: "Bangalore",
    },
    {
      date: new Date(2022, 4, 24),
      title: "Party",
      amount: "$10000",
      location: "Bangalore",
    },
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
