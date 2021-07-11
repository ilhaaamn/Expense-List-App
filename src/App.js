import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "1234",
    title: "Car Insurance",
    amount: 294.23,
    date: new Date(2021, 3, 1),
  },
  {
    id: "2223",
    title: "Toilet Paper",
    amount: 4.23,
    date: new Date(2021, 3, 3),
  },
  { id: "1145", title: "Gasoline", amount: 94.23, date: new Date(2021, 3, 5) },
  { id: "e123", title: "Rent", amount: 1294.23, date: new Date(2021, 3, 8) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App. JS");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
