import "./Expense.css";

const Expense = ({ title, amount, date }) => {
  return (
    <div className="expense-container">
      <div className="expense-title">
        <h2>{title}</h2>
      </div>
      <div className="expense-amount">
        <h2>{amount}</h2>
      </div>
      <div className="expense-date">
        <h3>{date}</h3>
      </div>
    </div>
  );
};

export default Expense;
