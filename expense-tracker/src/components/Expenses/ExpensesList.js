import React from 'react';
import ExpenseDetails from './ExpenseDetails';
import Row from 'react-bootstrap/Row';

const ExpensesList = (props) => {

  const deleteExpenseHandler = (expenseId) => {
    props.onDeleteExpense(expenseId);
  };

  let expensesContent = <p className="text-center underline-font">No items have been found</p>;

  if (props.items.length === 1) {
    expensesContent = (
      <p className="text-center underline-font">
        Only a single Expense here. Please add more...
      </p>
    );
  } else if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <Row className="mb-3" key={expense.id}>
        <ExpenseDetails
          className="border p-3"
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          onDelete={deleteExpenseHandler}
        />
      </Row>
    ));
  }

  return (
    <div>
      {expensesContent}
    </div>
  );
};

export default ExpensesList;
