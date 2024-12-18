import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const setCounter = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <div>
        <h1>Counter</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <p>Current count: {count}</p>
      </div>
      <div>
        <h3>Enter your desired number</h3>
        <input type="number" placeholder="Set counter" onChange={setCounter} />
      </div>
    </>
  );
}

export default Counter;
