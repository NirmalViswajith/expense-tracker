const ExpenseDetails = (props) => {
  const title = props.title;
  const location = props.location;
  const amount = props.price;
  return (
    <>
      <h2>{title}</h2>
      <div>{amount}</div>
      <div>{location}</div>
    </>
  );
}

export default ExpenseDetails;
