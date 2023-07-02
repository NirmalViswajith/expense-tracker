import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2023, 4, 21),
      title: "Car Insurance",
      price: "1000",
      location: "Banglore"
    },
    {
      date: new Date(2023, 4, 22),
      title: "Hotel",
      price: "870",
      location: "Banglore"
    },
    {
      date: new Date(2023, 4, 23),
      title: "Shopping",
      price: "10000",
      location: "Banglore"
    },
    {
      date: new Date(2023, 4, 24),
      title: "Party",
      price: "10000",
      location: "Banglore"
    }
  ]
  return (
    <div className="App">
      <h1>Expense Items</h1>
      {expenses.map((expense) => (
        <Expenses
          date={expense.date}
          title={expense.title}
          price={expense.price}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
