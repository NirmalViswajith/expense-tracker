import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Expenses(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("updated");
  };

  const [amount, setAmount] = useState(props.amount);
  const increment = () => {
    const updatedAmount = `$${Number(amount.replace('$','')) + 100}` 
    setAmount(updatedAmount);
  }

  return (
    <Container>
      <Card className="expenseItem border">
        <Row className="align-items-center">
          <Col xs={12} md={3}>
            <ExpenseDate date={props.date} />
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col className="ml-3">
                <ExpenseDetails title={title} />
              </Col>
              <Col>
                <ExpenseDetails location={props.location} />
              </Col>
              <Col>
                <ExpenseDetails amount={amount} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="text-center">
            <div className="d-flex justify-content-center mr-2">
              <Button variant="primary" size="sm" className="mr-2" onClick={increment}>+100</Button>
              <Button
                variant="primary"
                size="sm"
                className="mr-2"
                onClick={changeTitle}
              >
                Change Title
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Expenses;
