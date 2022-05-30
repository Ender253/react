import React, { useState } from 'react';


import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import './Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.expense.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpense} />
        <ExpensesList items={filterExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
