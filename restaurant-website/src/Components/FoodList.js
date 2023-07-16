import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CartContext from "./Store/cartContext";

const FoodList = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const quantityChangeHandler = (event) => {
    setQuantity(+event.target.value);
  };

  const addToCartHandler = () => {
    const item = {
      id: props.id,
      name: props.name,
      description: props.description,
      amount: props.amount,
      quantity: quantity,
    };
    cartCtx.addItem(item);
    setQuantity(0);
  };

  return (
    <div>
      <li className="flex justify-between">
        <div>
          <h4 className="text-xl">{props.name}</h4>
          <p className="text-muted">{props.description}</p>
          <h4 className="text-xl">{props.amount}</h4>
        </div>
        <div className="flex flex-col">
          <Form>
            <Form.Group className="flex">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="number"
                style={{ width: "125px" }}
                className="ml-2"
                value={quantity}
                onChange={quantityChangeHandler}
              />
            </Form.Group>
          </Form>
          <Button
            className="btn-danger rounded-pill mt-2 w-24"
            onClick={addToCartHandler}
          >
            +Add
          </Button>
        </div>
      </li>
      <hr className="w-full mt-4" />
    </div>
  );
};

export default FoodList;
