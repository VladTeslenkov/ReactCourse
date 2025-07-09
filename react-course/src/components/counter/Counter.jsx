import { useState } from "react";

const LIMIT = 5;

export const Counter = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value > 0) {
      setValue((value) => value - 1);
    }
  };
  const increment = () => {
    if (value < LIMIT) {
      setValue((value) => value + 1);
    }
  };

  return (
    <>
      <button className="decrement" onClick={decrement}>
        -
      </button>
      <span style={{ margin: "3px 3px 3px 3px" }}>{value}</span>
      <button className="increment" onClick={increment}>
        +
      </button>
    </>
  );
};
