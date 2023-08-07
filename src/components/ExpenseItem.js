import ExpenseItemStyle from './ExpenseItemStyle.css'

function ExpenseItem() {
    const expenseDate = new Date(2023,7,8);
    const expenseTitle = 'Birthday Party';
    const expenseAmount = 500;
    const LocationOfExpenditure = 'Taj Hotel'
    return (
        <div className = "expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
                <div className='expense-item__location'>{LocationOfExpenditure}</div>
            </div>
        </div>
    );
}

export default ExpenseItem