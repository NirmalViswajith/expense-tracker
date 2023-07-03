const ExpenseDetails = (props) => {
  const title = props.title;
  const location = props.location;
  const amount = props.price;
  return (
    <>
      <h4>{title}</h4>
      <div>{amount}</div>
      <div>{location}</div>
    </>
  );
}

export default ExpenseDetails;
