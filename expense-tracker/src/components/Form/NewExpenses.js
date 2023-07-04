import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import NewButton from "./NewButton";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpense = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.saveData(newExpense);
    setIsFormOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="container border p-2 my-5 border-dark rounded" style={{ maxWidth: "820px" }}>
      {!isFormOpen && <NewButton onClick={openForm} />}
      {isFormOpen && (
        <ExpenseForm onSaveData={saveExpense} onCancel={closeForm} />
      )}
    </div>
  );
};

export default NewExpense;
