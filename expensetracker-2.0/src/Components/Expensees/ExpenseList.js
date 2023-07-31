import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ExpenseList = (props) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <div className="overflow-x-auto">
        <table className="table table-bordered table-hover border">
          <thead>
            <tr>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Buttons</th>
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
      </div>
    </div>
  );
};

export default ExpenseList;