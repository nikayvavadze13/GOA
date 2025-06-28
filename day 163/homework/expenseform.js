import { useState } from "react";
import ExpenseCard from "./ExpenseCard";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && date) {
      const newExpense = {
        id: Date.now(),
        title,
        amount,
        date,
      };
      setExpenses([...expenses, newExpense]);
      setTitle("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Personal Expense Tracker</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseForm;
