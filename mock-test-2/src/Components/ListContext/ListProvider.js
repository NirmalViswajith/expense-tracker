import React, { useReducer, useEffect, useState } from "react";
import ListContext from "./ListContext";

const url = "https://crudcrud.com/api/3120e694b19943f2a9416344958d64da";

const medicineProvider = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.medicineItem.findIndex(
      (item) => item.name === action.medicineItem.name
    );
    if (existingItemIndex === -1) {
      const updatedItems = [...state.medicineItem, action.medicineItem];
      return {
        ...state,
        medicineItem: updatedItems,
      };
    }
  }
  return state;
};

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
  const [items, dispatchItems] = useReducer(medicineProvider, {
    medicineItem: [],
  });
  const [isLoading, setIsLoading] = useState(true); // Introduce a loading state

  const addMedicineHandler = async (medicine) => {
    dispatchItems({ type: "ADD_ITEM", medicineItem: medicine });
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
      dispatchItems({ type: "ADD_ITEM", medicineItem: data });
      setIsLoading(false); // Set loading state to false after data is fetched
    };
    fetchData();
  }, []);

  const listContextValue = {
    medicineList: items.medicineItem,
    addMedicine: addMedicineHandler,
  };

  // Only render props.children when loading is false
  return (
    <ListContext.Provider value={listContextValue}>
      {!isLoading && props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
