import React from "react";
import Container from "react-bootstrap/Container";

const Card = (props) => {
  const classes = 'card ' + props.className;
  return (
    <Container className={`${classes} border-dark`} style={{ maxWidth: "900px", justifyContent: "center", display: "flex" }}>
      {props.children}
    </Container>
  );
};

export default Card;
