import React, { useState, useEffect } from "react";

function Counter({ value, setValue, history, setHistory }) {
  const [color, setColor] = useState("text-gray-800");

  useEffect(() => {
    if (value > 0) setColor("text-green-600");
    else if (value < 0) setColor("text-red-600");
    else setColor("text-gray-800");
  }, [value]);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    updateHistory(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    updateHistory(newValue);
  };

  const handleReset = () => {
    setValue(0);
    updateHistory(0);
  };

  const updateHistory = (newVal) => {
    setHistory((prev) => [newVal, ...prev.slice(0, 4)]);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className={`text-5xl font-bold ${color}`}>{value}</h1>
      <div className="flex space-x-4">
        <button onClick={handleIncrement} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Increment</button>
        <button onClick={handleReset} className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">Reset</button>
        <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
