import React from "react";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }
  return (
    <div>
      <div className='text-center my-2'>
        <label >Filter By Year</label>
        <select className='mx-2 ' value = {props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;