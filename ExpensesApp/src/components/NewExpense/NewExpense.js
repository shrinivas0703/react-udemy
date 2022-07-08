import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [booleanForm, setBooleanForm] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function cancelExpenseDataHandler() {
    setBooleanForm(false);
  }

  function startEditingForm() {
    setBooleanForm(true);
  }

  return (
    <div className="new-expense">
      {!booleanForm && (
        <button onClick={startEditingForm}>Add New Expense</button>
      )}
      {booleanForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
