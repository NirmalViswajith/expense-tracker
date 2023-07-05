import React, { useState } from "react";
import Form from "react-bootstrap/Form";


const ExpenseForm = (props) => {
  const [enteredTitle, updatedTitle] = useState("");
  const newTitle = (event) => {
    updatedTitle(event.target.value);
  };
  const [enteredLocation, updatedLocation] = useState("");
  const newLocation = (event) => {
    updatedLocation(event.target.value);
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
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      location: enteredLocation,
      date: new Date(enteredDate),
    };
    props.onSaveData(expenseData);
    updatedTitle("");
    updatedAmount("");
    updatedLocation("");
    updatedDate("");
  };

  return (
    <div style={{ margin: "0 auto" }}>
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
        <Form.Label style={{ color: "black" }}>Expense Location</Form.Label>
        <Form.Control
          type="text"
          style={{ borderColor: "black" }}
          value={enteredLocation}
          onChange={newLocation}
        />
        <Form.Group controlId="date">
          <Form.Label style={{ color: "black" }}>Expense date</Form.Label>
          <Form.Control
            type="date"
            style={{ borderColor: "black" }}
            value={enteredDate}
            onChange={newDate}
          />
          <button className="btn-dark my-3">Add Expenses</button>
          <button className="btn-dark m-3" onCancel={props.onCancel}>Cancel</button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ExpenseForm;
