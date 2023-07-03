import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function Expenses(props) {
  const changeTitle = () => {
    console.log('Clicked!!!')
  }
  const delEvent = () => {
    const expenseItem = document.getElementById(props.id);
    if (expenseItem) {
      expenseItem.remove();
    }
  }
  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={delEvent}>Delete Expense</button>
    </Card>
  );
}

export default Expenses;
