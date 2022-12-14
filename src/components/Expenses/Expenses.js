import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpesesChart";
import './Expenses.css' 

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (year) => {
      setFilteredYear(year);
    }
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    
    return (
        <div>
          <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.length > 0 && <ExpensesChart items={filteredExpenses}/>}
            <ExpensesList items={filteredExpenses}/>
          </Card>
        </div>
        
    )
}

export default Expenses;
