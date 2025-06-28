import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count is the state, setCount updates it

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
