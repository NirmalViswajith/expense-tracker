import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const ExpenseList = (props) => {
  const [isPremium, setPremium] = useState(false);
  const totalAmount = props.items.reduce((curr, expense) => {
    return curr + +expense.amount;
  }, 0);

  useEffect(() => {
    if (totalAmount > 10000) {
      setPremium(true);
    } else {
      setPremium(false);
    }
  }, [totalAmount])



  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <div className="overflow-x-auto">
        <table className="table table-fixed table-hover border" style={{ maxWidth: '650px' }}>
          <thead>
            <tr>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((expense) => (
              <tr key={expense.id}>
                <td className="px-4 py-2">{expense.description}</td>
                <td className="px-4 py-2">{expense.amount}</td>
                <td className="px-4 py-2">{expense.category}</td>
                <td>
                  <Button
                    className="mr-2"
                    variant="outline-dark"
                    onClick={() => props.edit(expense)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline-dark"
                    onClick={() => props.delete(expense.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end mt-4 mr-3">
          <strong>Total Amount: {totalAmount}</strong>
          {isPremium && (
            <Button className="ml-2">Premium</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
