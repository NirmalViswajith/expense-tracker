import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemsList = (props) => {
  const handleDelete = () => {
    localStorage.removeItem(props.id);
    props.onDelete(props.id);
  };

  return (
    <li>
      {props.id} - {props.amount} - {props.name} - {props.category}
      <Button className='mx-2 my-2' onClick={handleDelete}>
        Delete Product
      </Button>
    </li>
  );
};

export default ItemsList;
