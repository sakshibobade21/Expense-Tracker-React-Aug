import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css' 

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (year) => {
      setFilteredYear(year);
    }
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    
    let expensesContent = <p>No expense found</p>;

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map(expense => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))
    }

    return (
        <div>
          <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expensesContent}
          </Card>
        </div>
        
    )
}

export default Expenses;
