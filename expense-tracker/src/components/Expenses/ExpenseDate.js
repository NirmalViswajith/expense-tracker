const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="border p2 mx-2 my-2 text-center text-white bg-secondary">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;