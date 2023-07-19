import { Container, Table, Image, Button } from "react-bootstrap";
import Modal from "./Modal";

const Cart = (props) => {
  const renderCartItems = () => {
    return props.products.map((product) => (
      <tr key={product.title}>
        <td className="">
          <Image
            src={product.imageUrl}
            alt={product.title}
            rounded
            height={50}
            width={80}
            className="mr-2"
          />
          <span>{product.title}</span>
        </td>
        <td>${product.price}</td>
        <td className="d-flex align-items-center">
          <span className="border border-primary rounded px-2 mx-2">1</span>
          <Button variant="danger">Remove</Button>
        </td>
      </tr>
    ));
  };

  const totalAmount = props.products.reduce((total, items) => {
    const amount = items.price;
    return total + amount;
  }, 0);

  return (
    <Modal>
      <Container
        style={{ maxWidth: "500px" }}
        className="border border-dark text-center p-2"
      >
        <div className="d-flex justify-center align-items-center mb-2">
          <h4 className="flex-grow-1">Cart</h4>
          <Button variant="outline-dark" onClick={props.onClose}>x</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{renderCartItems()}</tbody>
        </Table>
        <div className="d-flex justify-center">
          <h4>Total:</h4>
          <h5 className="ml-5">${totalAmount}</h5>
        </div>
      </Container>
    </Modal>
  );
};

export default Cart;
