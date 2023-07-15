import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FoodList = (props) => {
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
              <Form.Control type="number" style={{ width: "125px" }} className="ml-2" />
            </Form.Group>
          </Form>
          <Button className="btn-danger rounded-pill mt-2 w-24">+Add</Button>
        </div>
      </li>
      <hr className="w-full mt-4" />
    </div>
  );
};

export default FoodList;
