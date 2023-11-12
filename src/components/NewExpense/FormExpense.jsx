import { useState } from "react";
import "./FormExpense.css";

const FormExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateHandler(event) {
    setEnteredDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div class="input-value">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="PLease Enter The Title"
            required
            value={enteredTitle}
            onChange={titleHandler}
          />
        </div>
        <div>
          <label className="label">Amount</label>
          <input
            type="Number"
            required
            onChange={amountHandler}
            value={enteredAmount}
            placeholder="Please Enter Your Amount :"
          />
        </div>
        <div>
          <label className="label">Title</label>
          <input
            type="date"
            required
            value={enteredDate}
            onChange={dateHandler}
            placeholder="Please Enter The Date :"
          />
        </div>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default FormExpense;
