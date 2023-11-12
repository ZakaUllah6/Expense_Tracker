import FormExpense from "./FormExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  function ExpenseData(enteredExpenseData) {
    const NewData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddData(NewData);
  }
  return (
    <div>
      <FormExpense onSaveData={ExpenseData} />
    </div>
  );
};

export default NewExpense;
