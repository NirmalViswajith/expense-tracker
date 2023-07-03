import React from 'react';
import Form from 'react-bootstrap/Form';

const ExpenseForm = () => {
  const inputChange = (event) => {
    console.log(event.target.value);
  }
  return (
    <Form>
      <Form.Group controlId='title' >
        <Form.Label style={{ color: 'black' }}>Expense Title</Form.Label>
        <Form.Control type='text' style={{ borderColor: 'black' }} onChange={inputChange} />
      </Form.Group>
      <Form.Group controlId='amount'>
        <Form.Label style={{ color: 'black' }}>Expense Amount</Form.Label>
        <Form.Control type='number' min="0.01" step="0.01" style={{ borderColor: 'black' }} />
      </Form.Group>
      <Form.Group controlId='date'>
        <Form.Label style={{ color: 'black' }}>Expense date</Form.Label>
        <Form.Control type='date' style={{ borderColor: 'black' }} />
        <button className='btn-dark my-3' >
          Add Expenses
        </button>
      </Form.Group>
    </Form>
  );
}

export default ExpenseForm;
