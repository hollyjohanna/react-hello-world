// Decalring our useState hook
import { useState } from "react";

const Counter = () => {
  // the first name is the variable (count)
  // the second name is the function name which changes the variable
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="section">
      <h2>Counter</h2>
      <p>This counter uses useState to increment itself</p>
      <p id="count">{count}</p>
      <button onClick={increaseCount}>+1</button>
      <br></br>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
