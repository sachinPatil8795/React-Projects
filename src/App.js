import React, { useState } from "react";
import Card from "./components/UI/Card";
import "./components/Expense/ExpenseItemStyle.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  
  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  }
  

  return (
    <Card>
      <h1 className="main-header">Welcome to Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
