import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpense = (data) => {
    const expenseData = {
      ...data,
      id : Math.random().toString()
    }
    props.saveData(expenseData);
  }
  return (
    <div className="container border p-2 my-5 border-dark rounded" style={{ maxWidth: "425px" }}>
      <ExpenseForm onSaveData={saveExpense}/>
    </div>
  );
}

export default NewExpense;