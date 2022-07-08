import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    /* const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    }); */

    const [enteredTitle, setEnteredTitle] = useState("");
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    
    const [enteredAmount, setEnteredAmount] = useState("");
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState("");
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
    }

    function cancelHandler(event) {
        event.preventDefault();
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
        props.onCancelExpenseData();
    }

    return <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div>
                <label className = "new-expense__control label">Title</label>
                <input className = "new-expense__control input" value = {enteredTitle} type = "text" onChange={titleChangeHandler} />
            </div>
            <div>
                <label className = "new-expense__control label">Amount</label>
                <input className = "new-expense__control input" type = "number" value = {enteredAmount} min = "0.01" step = "0.01" onChange={amountChangeHandler}/>
            </div>
            <div>
                <label className = "new-expense__control label">Date</label>
                <input className = "new-expense__control input" type = "date" value = {enteredDate} min = "2019-01-01" max = "2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "submit"> Add Expense </button>
            <button type = "button" onClick={cancelHandler}> Cancel </button>
        </div>
    </form>
}

export default ExpenseForm;