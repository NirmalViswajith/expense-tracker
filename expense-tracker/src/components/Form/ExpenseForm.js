import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const ExpenseForm = (props) => {
  const inputChange = (event) => {
    console.log(event.target.value);
  };

  const [enteredTitle, updatedTitle] = useState("");
  const newTitle = (event) => {
    updatedTitle(event.target.value);
  };
  const [enteredAmount, updatedAmount] = useState("");
  const newAmount = (event) => {
    updatedAmount(event.target.value);
  };
  const [enteredDate, updatedDate] = useState("");
  const newDate = (event) => {
    updatedDate(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault(); // Prevent form submission
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(expenseData);
    updatedTitle("");
    updatedAmount("");
    updatedDate("");
   };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Form className="p-2" onSubmit={submit}>
        <Form.Group controlId="title">
          <Form.Label style={{ color: "black" }}>Expense Title</Form.Label>
          <Form.Control
            type="text"
            style={{ borderColor: "black" }}
            value={enteredTitle}
            onChange={newTitle}
          />
        </Form.Group>
        <Form.Group controlId="amount">
          <Form.Label style={{ color: "black" }}>Expense Amount</Form.Label>
          <Form.Control
            type="number"
            min="0.01"
            step="0.01"
            style={{ borderColor: "black" }}
            value={enteredAmount}
            onChange={newAmount}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label style={{ color: "black" }}>Expense date</Form.Label>
          <Form.Control
            type="date"
            style={{ borderColor: "black" }}
            value={enteredDate}
            onChange={newDate}
          />
          <button className="btn-dark my-3">Add Expenses</button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ExpenseForm;
