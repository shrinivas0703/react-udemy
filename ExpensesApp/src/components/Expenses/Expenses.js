import React, { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState("2019");
  function filterChangeHandler(selectedYear) {
    setPickedYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          currentSelection={pickedYear}
          onChangedFilter={filterChangeHandler}
        />
        <ExpensesChart
          expenses={props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === pickedYear;
          })}
        />
        <ExpensesList
          expenses={props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === pickedYear;
          })}
        />
      </Card>
    </div>
  );
}
export default Expenses;
