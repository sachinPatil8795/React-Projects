import React, { useState } from "react";

import "./components/Expense/ExpenseItemStyle.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]); //new expense added will be at top
  };

  return (
    <div>
      <h1 className="main-header">Welcome to Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
