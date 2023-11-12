import React, { useState } from "react";
import Header from "./components/Header/Header";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Date = [
  {
    id: 1,
    title: "Car oil",
    amount: 20.99,
    date: "December 16,2022",
  },
  {
    id: 2,
    title: "Toliet Paper",
    amount: 44.99,
    date: "December 16,2022",
  },
  {
    id: 3,
    title: "Cigrattes",
    amount: 10.0,
    date: "December 16,2022",
  },
];
const App = () => {
  const [data, setData] = useState(Dummy_Date);

  function addExpenseHandler(pullData) {
    setData((prevData) => {
      return [pullData, ...prevData];
    });
  }
  const dateObject = new Date();
  const dateString = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Header />
      <NewExpense onAddData={addExpenseHandler} />

      {data.map((items, index) => (
        <Expense
          key={index}
          title={items.title}
          amount={items.amount}
          date={dateString}
        />
      ))}
    </div>
  );
};

export default App;
