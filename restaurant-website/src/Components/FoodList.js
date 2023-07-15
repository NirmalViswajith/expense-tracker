const FoodList = (props) => {
  return (
    <li>
      <h4 className="text-xl">{props.name}</h4>
      <p className="text-muted">{props.description}</p>
      <h4 className="text-xl">{props.amount}</h4>
      <hr />
    </li>
  );
}

export default FoodList;
