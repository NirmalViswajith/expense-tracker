import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import Row from "react-bootstrap/Row";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p className="text-center underline-font">No items have been found</p>;

  if (filteredExpenses.length === 1) {
    expensesContent = (
      <p className="text-center underline-font">Only a single Expense here. Please add more...</p>
    );
  } else if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <Row className="mb-3" key={expense.id}>
        <ExpenseDetails
          className="border p-3"
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      </Row>
    ));
  }

  return (
    <Card className="expenseItem border my-3" style={{ maxWidth: "850px" }}>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
