import Button from "react-bootstrap/Button";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const music = productsArr.map((product) => (
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
