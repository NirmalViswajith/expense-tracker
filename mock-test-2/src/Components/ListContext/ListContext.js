import React from "react";

const ListContext = React.createContext({
  medicineList: [],
  addMedicine: (medicine) => {}
})

export default ListContext;