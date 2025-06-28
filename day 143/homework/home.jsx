import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const changeText = () => {
    setCount(count === 5 ? "You've clicked 5 times!" : count);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Counter Example</h1>
      <p className="mt-4 text-xl">{count}</p>
      
      <button
        onClick={increment}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Increment Counter
      </button>

      <button
        onClick={changeText}
        className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
      >
        Change Text After 5 Clicks
      </button>
    </div>
  );
}

export default Counter;
