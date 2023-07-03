import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ExpenseForm = () => {
  const inputChange = (event) => {
    console.log(event.target.value);
  };

  const [enteredTitle, updatedTitle] = useState("");
  const newTitle = (event) => {
    updatedTitle(event.target.value);
  }
  const [enteredAmount, updatedAmount] = useState("");
  const newAmount = (event) => {
    updatedTitle(event.target.value);
  }
  const [enteredDate, updatedDate] = useState("");
  const newDate = (event) => {
    updatedDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent form submission
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Form className='p-2' onSubmit={submitHandler}>
        <Form.Group controlId='title'>
          <Form.Label style={{ color: 'black' }}>Expense Title</Form.Label>
          <Form.Control type='text' style={{ borderColor: 'black' }} onChange={newTitle} />
        </Form.Group>
        <Form.Group controlId='amount'>
          <Form.Label style={{ color: 'black' }}>Expense Amount</Form.Label>
          <Form.Control type='number' min='0.01' step='0.01' style={{ borderColor: 'black' }} onChange={newAmount} />
        </Form.Group>
        <Form.Group controlId='date'>
          <Form.Label style={{ color: 'black' }}>Expense date</Form.Label>
          <Form.Control type='date' style={{ borderColor: 'black' }} onChange={newDate} />
          <button className='btn-dark my-3'>Add Expenses</button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ExpenseForm;
