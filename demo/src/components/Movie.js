import React from 'react';
import classes from './Movie.module.css';
import Button from 'react-bootstrap/Button';

const Movie = (props) => {
  const handleDelete = () => {
    props.deleteHandler(props.id);
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button variant='outline-warning' onClick={handleDelete}>Delete</Button>
    </li>
  );
};

export default Movie;
