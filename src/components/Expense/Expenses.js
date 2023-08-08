import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense, index) => (
        <ExpenseItem
          key={index} // Adding a unique key for React's rendering optimization
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </Card>
  );
}

export default Expenses;
