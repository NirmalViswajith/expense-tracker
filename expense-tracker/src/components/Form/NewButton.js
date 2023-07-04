const NewButton = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn-dark p-2" onClick={props.onClick}>Add New Expense</button>
    </div>
  );
};

export default NewButton;
