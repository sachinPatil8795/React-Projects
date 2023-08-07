import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Birthday party",
      date: new Date(2023, 7, 8),
      amount: 500,
      location: "Taj Hotel",
    },
    {
      title: "Travel",
      date: new Date(2023, 7, 20),
      amount: 800,
      location: "Maldives",
    },
    {
      title: "Mercedes Benz",
      date: new Date(2023, 11, 11),
      amount: 50000,
      location: "Pune",
    },
    {
      title: "House",
      date: new Date(2023, 12, 8),
      amount: 100000,
      location: "Belgaum",
    },
  ];
  return (
    <div>
      <h1>Welcome to Expense Tracker</h1>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index} // Adding a unique key for React's rendering optimization
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
