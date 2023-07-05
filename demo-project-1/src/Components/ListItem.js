import React from "react";
const ListItem = (props) => {
  const deleteListHandler = () => {
    props.onDelete(props.id);
  }
  return (
    <li className="border border-dark bg-dark my-3 p-2" style={{maxWidth:'500px',color: 'white',
    listStyleType: 'none',
    margin: 0,
    padding: 0}} onClick={deleteListHandler}>
      {props.children}
    </li>
  );
}

export default ListItem;