import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      date: "March 21",
      title: "Car Insurance",
      price: "1000",
      location: "Banglore"
    },
    {
      date: "March 22",
      title: "Hotel",
      price: "870",
      location: "Banglore"
    },
    {
      date: "March 23",
      title: "Shopping",
      price: "10000",
      location: "Banglore"
    },
    {
      date: "March 24",
      title: "Party",
      price: "10000",
      location: "Banglore"
    }
  ]
  return (
    <div className="App">
      <h1>Expense Items</h1>
      {expenses.map((expense, index) => (
        <Expenses
          key={index}
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
