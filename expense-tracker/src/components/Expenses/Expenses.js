import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
function Expenses(props) {
  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
    </Card>
  );
}

export default Expenses;
