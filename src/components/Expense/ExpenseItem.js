import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   setAmount(100);

  //   console.log("Updated Title:", title);
  //   console.log("Updated Amount:", amount);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amount={props.amount} />
        {/* <button onClick={clickHandler}></button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
