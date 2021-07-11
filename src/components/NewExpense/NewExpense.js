import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsFormEnabled(false);
  };

  const formEnabledHandler = () => {
    setIsFormEnabled(true);
  };

  const formDisabledHandler = () => {
    setIsFormEnabled(false);
  };

  return (
    <div className="new-expense">
      {!isFormEnabled && (
        <button onClick={formEnabledHandler}>Add New Expenses</button>
      )}
      {isFormEnabled && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onFormDisabled={formDisabledHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
