import { Form, Button, Container } from "react-bootstrap";
import React, {useRef, useContext} from "react";
import ListContext from "./ListContext/ListContext";

const AddProductForm = () => {
  const ctx = useContext(ListContext);
  const medicineName = useRef();
  const medicineDescription = useRef();
  const medicinePrice = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const medicine = {
      name: medicineName.current.value,
      description: medicineDescription.current.value,
      price: medicinePrice.current.value,
      quantity: 1
    }
    console.log(medicine);
    ctx.addMedicine(medicine);
  }
  return (
    <Container className="border rounded bg-light p-2 shadow my-4" style={{maxWidth: '650px'}} >
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Medicine Name: </Form.Label>
          <Form.Control type="text" ref={medicineName}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description: </Form.Label>
          <Form.Control type="text" ref={medicineDescription}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price: </Form.Label>
          <Form.Control type="number" ref={medicinePrice}></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center mt-3">         <Button variant='success' type="submit">AddProducts</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProductForm;
