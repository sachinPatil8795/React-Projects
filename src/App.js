import React from "react";
import Card from "./components/UI/Card";
import "./components/Expense/ExpenseItemStyle.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "iPhone",
      date: new Date(2023, 7, 8),
      amount: 600
    },
    {
      title: "Travel",
      date: new Date(2023, 7, 20),
      amount: 800
    },
    {
      title: "Mercedes Benz",
      date: new Date(2023, 11, 11),
      amount: 50000
    },
    {
      title: "House",
      date: new Date(2023, 12, 8),
      amount: 100000
    },
  ];

  return (
    <Card>
      <h1 className="main-header">Welcome to Expense Tracker</h1>
      <NewExpense />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
