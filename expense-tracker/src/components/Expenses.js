import "./Expenses.css";
function Expenses() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'Car Insurance';
  const itemPrice = '$1000';
  const locationOfExpenditure = 'Bank Of Baroda';
  return (
    <>
      <h1>Expense Items</h1>
      <div className="expenseItem">
        <div>{expenseDate.toISOString()}</div>
        <h2>{expenseTitle}</h2>
        <div>{itemPrice}</div>
        <div>{locationOfExpenditure}</div>
      </div>
    </>
  );
}

export default Expenses;
