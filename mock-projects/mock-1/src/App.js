import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemsForm from "./Components/ItemsForm";
import Items from "./Components/Items";
function App() {
  const [products, setProducts] = useState([]);
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    products.forEach((products) => {
      localStorage.setItem(`${products.id}`, JSON.stringify(products));
    });
  }, [products]);

  const productHandler = (newProduct) => {
    setProducts((prevProducts) => {
      return [...prevProducts, newProduct];
    });
  };
  return (
    <div>
      <ItemsForm onProducts={productHandler} />
      <Items products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;
