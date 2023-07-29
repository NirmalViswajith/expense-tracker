import React, { useContext, useEffect, useState } from "react";
import ListContext from "./ListContext/ListContext";
import { Button } from "react-bootstrap";

const ProductList = () => {
  const ctx = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ctx.medicineList.length > 0) {
      setIsLoading(false);
    }
  }, [ctx.medicineList]); // Add ctx.medicineList as a dependency

  // Check if medicineList is not empty before rendering
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (ctx.medicineList.length === 0) {
    return <div>No medicine items found.</div>;
  }

  const list = ctx.medicineList.map((medicine, index) => (
    <li key={index} className="mt-2">
      {medicine.name} - {medicine.description} - {medicine.price} - {medicine.quantity} <Button>Add</Button>
    </li>
  ));

  return (
    <div className="d-flex justify-content-center">
      <ul className="border rounded p-2 shadow" style={{ listStyle: 'none' }}>
        {list}
      </ul>
    </div>
  );
};

export default ProductList;
