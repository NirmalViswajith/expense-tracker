import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExpense from "./components/Form/NewExpenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      date: new Date(2023, 4, 21),
      title: "Car Insurance",
      amount: "$1000",
      location: "Bangalore",
    },
    {
      id: "e2",
      date: new Date(2023, 4, 22),
      title: "Hotel",
      amount: "$870",
      location: "Bangalore",
    },
    {
      id: "e3",
      date: new Date(2023, 4, 23),
      title: "Shopping",
      amount: "$10000",
      location: "Bangalore",
    },
    {
      id: "e4",
      date: new Date(2023, 4, 24),
      title: "Party",
      amount: "$10000",
      location: "Bangalore",
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <Container fluid>
      <Card className="App">
        <h1 className="text-center my-4">Expense Items</h1>
        <NewExpense saveData={addExpenseHandler} />
        {expenses.map((expense) => (
          <Row key={expense.id} className="mb-3">
            <Expenses
              className="border p-3"
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
              location={expense.location}
            />
          </Row>
        ))}
      </Card>
    </Container>
  );
}

export default App;
