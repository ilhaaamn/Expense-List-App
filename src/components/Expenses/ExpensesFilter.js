import "./ExpensesFilter.css";

//Controlled Component: the values are not handle in the component itself but outside/parent component. In this case controller by Expenses.js
const ExpensesFilter = (props) => {
  const yearSelectedHandler = (event) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
