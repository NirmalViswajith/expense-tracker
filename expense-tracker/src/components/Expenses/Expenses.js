import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Expenses(props) {
  const changeTitle = () => {
    console.log("Clicked!!!");
  };

  const delEvent = () => {
    const expenseItem = document.getElementById(props.id);
    if (expenseItem) {
      expenseItem.remove();
    }
  };

  return (
    <Container>
      <Card className="expenseItem border">
        <Row className="align-items-center">
          <Col xs={12} md={3}>
            <ExpenseDate date={props.date} />
          </Col>
          <Col xs={12} md={6}>
            <Row >
              <Col className="ml-3">
                <ExpenseDetails title={props.title} />
              </Col>
              <Col>
                <ExpenseDetails location={props.location} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="text-center">
            <div className="d-flex justify-content-center mr-2">
              <Button variant="primary" size="sm" className="mr-2" onClick={changeTitle}
>
                Change Title
              </Button>
              <Button variant="danger" size="sm" onClick={delEvent}>
                Delete Expense
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Expenses;
