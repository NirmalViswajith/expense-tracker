import React, { useEffect, useState } from "react";
import ListContext from "./ListContext";

const url = "https://crudcrud.com/api/67e700b9bbb34a4091408f4a4bc971cb";


const addToCrudCrud = async (name, description, price, quantity) => {
  try {
    const item = await fetch(`${url}/list`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        quantity: quantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        console.log("added");
        return res.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const toGetFromCrudCrud = async () => {
  try {
    const res = await fetch(`${url}/list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    } else {
      console.log("Error fetching data from the backend.");
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

const ListProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]); 

  const addMedicineHandler = async (medicine) => {
    
    setProducts((prev) => [...prev, medicine]);
    await addToCrudCrud(
      medicine.name,
      medicine.description,
      medicine.price,
      medicine.quantity
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await toGetFromCrudCrud();
      setProducts(data);
      setIsLoading(false); 
    };
    fetchData();
  }, []); 

  const listContextValue = {
    medicineList: products,
    addMedicine: addMedicineHandler,
  };

  return (
    <ListContext.Provider value={listContextValue}>
      {!isLoading && props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
