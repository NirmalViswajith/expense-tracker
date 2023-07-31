import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ExpenseList from "./ExpenseList";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const url = "https://expense-tracker-9e669-default-rtdb.firebaseio.com";

  const submitHandler = async (event) => {
    event.preventDefault();
    const expenses = {
      description: description,
      amount: amount,
      category: category,
    };
    console.log(expenses);
    const email = localStorage.getItem("email");
    const encodedEmail = encodeURIComponent(email);
    console.log(encodedEmail);
    try {
      await fetch(`${url}/expenses.json`, {
        method: "POST",
        body: JSON.stringify(expenses),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload. Please check the console for more information.");
    }
    setExpenses((prev) => [...prev, expenses]);
    setDescription("");
    setAmount("");
    setCategory("");
  };

  useEffect(() => {
    const fetchData = async() => {
      try {
         const res = await fetch(`${url}/expenses.json`, {
          method: 'GET',
          headers: {
            'Content-type' : 'application/json'
          }
        });

        if(res.ok) {
          const data = await res.json();
          const newItem = [];
          for(let key in data) {
            newItem.push({
              id: key,
              ...data[key]
            });
          }
          setExpenses(newItem)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []) 

  return (
    <div>
      <Container
        className="border rounded p-2 shadow mt-5"
        style={{ maxWidth: "600px" }}
      >
        <div className="d-flex justify-content-center">
          <h1 className="text-3xl">Daily Expenses</h1>
        </div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="form-floating my-2">
            <Form.Control
              type="text"
              placeholder=""
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></Form.Control>
            <Form.Label>Description</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating my-2">
            <Form.Control
              type="number"
              placeholder=""
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            ></Form.Control>
            <Form.Label>Amount Spent</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating my-2">
            <Form.Control
              as="select"
              value={category}
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
            <Form.Label>Category</Form.Label>
          </Form.Group>
          <div className="d-flex justify-content-center mt-3">
            <Button type="submit">Add Expense</Button>
          </div>
        </Form>
      </Container>
      <Container
        className="border rounded p-2 shadow mt-5"
        style={{ maxWidth: "600px" }}
      >
        <ExpenseList items={expenses} />
      </Container>
    </div>
  );
};

export default ExpenseForm;
