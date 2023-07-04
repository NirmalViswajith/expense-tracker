import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpense = (onSaveData) => {
    const expenseData = {
      ...onSaveData,
      id : Math.random().toString()
    }
    props.saveData(expenseData);
  }
  return (
    <div className="container border p-2 my-5 border-dark rounded" style={{ maxWidth: "820px" }}>
      <ExpenseForm onSaveData={saveExpense}/>
    </div>
  );
}

export default NewExpense;