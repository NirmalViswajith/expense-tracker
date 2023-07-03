import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="container border p-2 my-5 border-dark rounded" style={{ maxWidth: "425px" }}>
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;