import "./Expenses.css";
function Expenses(props) {
  return (
    <>
      <div className="expenseItem">
        <div>{props.date}</div>
        <h2>{props.title}</h2>
        <div>{props.price}</div>
        <div>{props.location}</div>
      </div>
    </>
  );
}

export default Expenses;
