import React, { useState } from "react";

export default function NormalVarExample() {
  let count = 0;
  const [, setRerender] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-xl">ჩვეულებრივი ცვლადი: {count}</h1>
      <button onClick={() => count++} className="m-2 p-2 bg-blue-500 text-white">Increment</button>
      <button onClick={() => console.log("Count:", count)} className="m-2 p-2 bg-green-500 text-white">Console Log</button>
      <button onClick={() => setRerender(prev => prev + 1)} className="m-2 p-2 bg-gray-500 text-white">Render</button>
    </div>
  );
}
