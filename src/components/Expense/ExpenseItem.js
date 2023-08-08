import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const deleteExpense = () => {
    console.log('Deleted !!!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
      />
      <button onClick={deleteExpense}>Delete expense</button>
    </Card>
  );
};

export default ExpenseItem;
