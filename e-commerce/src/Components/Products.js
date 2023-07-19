import Button from "react-bootstrap/Button";

const Products = (props) => {
  

  const music = props.productsArr.map((product) => (
    <div key={product.title} className="my-4">
      <h6 className="text-xl font-bold">{product.title}</h6>
      <p className="text-lg">${product.price}</p>
      <img src={product.imageUrl} alt="music" className="my-2 rounded" />
      <Button className="btn btn-primary">Add Products</Button>
    </div>
  ));

  return (
    <div className="container mx-auto">
      {music}
      <Button className="btn btn-primary">See Products</Button>
    </div>
  );
};

export default Products;
