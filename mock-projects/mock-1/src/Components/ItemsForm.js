import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import AddButton from "./Button";

const ItemsForm = (props) => {
  // const [enteredId, setId] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredCategory, setCategory] = useState("Electronic Items");

  // const idHandler = (event) => {
  //   setId(event.target.value);
  // };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const product = {
      id: Math.random().toString(),
      amount: enteredAmount,
      name: enteredName,
      category: enteredCategory,
    };
    props.onProducts(product);
    // setId("");
    setAmount("");
    setName("");
    setCategory("Electronic Items");
  };

  return (
    <Container className="my-5 p-3 border border-dark rounded bg-light" style={{ fontWeight: "bold", maxWidth: "600px" }}>
      <Form onSubmit={formSubmit}>
        {/* <Form.Group>
          <Form.Label>ProductID: </Form.Label>
          <Form.Control type="number" value={enteredId} onChange={idHandler} />
        </Form.Group> */}
         <Form.Group>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type="text" value={enteredName} onChange={nameHandler} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Amount:</Form.Label>
          <Form.Control type="number" value={enteredAmount} onChange={amountHandler} />
        </Form.Group>
        <Form.Group>
          <Form.Label className="my-2">Choose a category:</Form.Label>
          <select className="form-select" name="category" id="category" value={enteredCategory} onChange={categoryHandler}>
            <option value="Electronic Items">Electronic Items</option>
            <option value="Food Items">Food Items</option>
            <option value="Skincare Items">Skincare Items</option>
          </select>
        </Form.Group>
        <AddButton />
      </Form>
    </Container>
  );
};

export default ItemsForm;
