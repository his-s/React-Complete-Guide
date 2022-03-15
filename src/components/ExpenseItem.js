import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2020</div>
      <div className="expense-item__description">
        <h2>Car incurance</h2>
        <div className="expense-item__price">228.22$</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
