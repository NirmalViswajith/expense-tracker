import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ExpenseDetails = (props) => {
  const { title, location, amount } = props;
  const [expenseAmount, setExpenseAmount] = useState(amount);

  const increment = () => {
    const updatedAmount = `$${Number(expenseAmount.replace("$", "")) + 100}`;
    setExpenseAmount(updatedAmount);
  };

  return (
    <Container>
      <Row className="border border-dark mx-2 align-items-center">
        <Col xs={12} md={3}>
          <ExpenseDate date={props.date} />
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col className="ml-3"><h4>{title}</h4></Col>
            <Col>{location}</Col>
            <Col>{expenseAmount}</Col>
          </Row>
        </Col>
        <Col xs={12} md={3} className="text-center">
          <div className="d-flex justify-content-center mr-2">
            <Button variant="primary" size="sm" className="mr-2" onClick={increment}>
              +100
            </Button>
          </div>
        </Col>
      

      </Row>
    </Container>
  );
};

export default ExpenseDetails;
