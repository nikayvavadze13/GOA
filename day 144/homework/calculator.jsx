import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    if (operation === "+") {
      res = number1 + number2;
    } else if (operation === "-") {
      res = number1 - number2;
    } else if (operation === "*") {
      res = number1 * number2;
    } else if (operation === "/") {
      res = number1 / number2;
    }
    setResult(res);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Calculator</h1>
      <div className="mb-4">
        <input
          type="number"
          className="p-2 border-2 border-gray-300 rounded-md mr-4"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          className="p-2 border-2 border-gray-300 rounded-md"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleCalculation("+")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          +
        </button>
        <button
          onClick={() => handleCalculation("-")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          -
        </button>
        <button
          onClick={() => handleCalculation("*")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          *
        </button>
        <button
          onClick={() => handleCalculation("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          /
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
      {result !== null && (
        <div className="mt-4 text-2xl font-bold text-green-500">
          Result: {result}
        </div>
      )}
    </div>
  );
}

export default Calculator;
