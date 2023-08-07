import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ExpenseList from "./ExpenseList";
import {useDispatch} from 'react-redux';
import { authAction, expenseAction } from "../Store/Store";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const url = "https://expense-tracker-9e669-default-rtdb.firebaseio.com";

  const submitHandler = async (event) => {
    event.preventDefault();
    const newExpense = {
      description: description,
      amount: amount,
      category: category,
    };
    try {
      const response = await fetch(`${url}/expenses.json`, {
        method: "POST",
        body: JSON.stringify(newExpense),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setExpenses((prev) => [...prev, { id: data.name, ...newExpense }]);
        dispatch(expenseAction.addExpense(newExpense))
        setDescription("");
        setAmount("");
        setCategory("");
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload. Please check the console for more information.");
    }
  };

  const updateItem = async () => {
    const editedExpense = {
      id: editingItem.id,
      description: description,
      amount: amount,
      category: category,
    };

    try {
      const response = await fetch(`${url}/expenses/${editingItem.id}.json`, {
        method: "PUT",
        body: JSON.stringify(editedExpense),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        setExpenses((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense.id === editedExpense.id ? editedExpense : expense
          )
        );
        dispatch(expenseAction.editExpense(editedExpense));
        setDescription("");
        setAmount("");
        setCategory("");
        setEditingItem(null);
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update. Please check the console for more information.");
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${url}/expenses/${id}.json`, {
        method: "DELETE",
      });
      if (response.ok) {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense.id !== id)
        );
        dispatch(expenseAction.deleteExpense(id));
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/expenses.json`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          const newItem = [];
          for (let key in data) {
            newItem.push({
              id: key,
              ...data[key],
            });
          }
          setExpenses(newItem);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const editItem = (item) => {
    setEditingItem(item);
    setDescription(item.description);
    setAmount(item.amount);
    setCategory(item.category);
  };

  return (
    <div>
      <Container className="border rounded p-2 shadow mt-5" style={{ maxWidth: "600px" }}>
        <div className="d-flex justify-content-center">
          <h1 className="text-3xl">Daily Expenses</h1>
        </div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="form-floating my-2">
            <Form.Control
              type="text"
              id='description'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Form.Label for='description'>Description</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating my-2">
            <Form.Control
              type="number"
              value={amount}
              id='amount spent'
              onChange={(event) => setAmount(event.target.value)}
            />
            <Form.Label for='amount spent'>Amount Spent</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating my-2">
            <Form.Control
              as="select"
              value={category}
              id='category'
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="" disabled>
                Choose a category...
              </option>
              <option value="food">Food</option>
              <option value="movie">Movie</option>
              <option value="shopping">Shopping</option>
              <option value="rent">Rent</option>
              <option value="grocery">Grocery</option>
            </Form.Control>
            <Form.Label for='category'>Category</Form.Label>
          </Form.Group>
          <div className="d-flex justify-content-center mt-3">
            {editingItem ? (
              <Button type="button" onClick={updateItem}>
                Update Expense
              </Button>
            ) : (
              <Button type="submit">Add Expense</Button>
            )}
          </div>
        </Form>
      </Container>
      <Container className="border rounded p-2 shadow mt-5" style={{ maxWidth: "600px" }}>
        <ExpenseList items={expenses} delete={deleteItem} edit={editItem} />
      </Container>
    </div>
  );
};

export default ExpenseForm;