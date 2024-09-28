import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((v) => v + 1);
  };

  const decrement = () => {
    setCount((v) => v - 1);
  };

  return (
    <>
      <CounterDisplay
        count={count}
        increment={increment}
        decrement={decrement}
        title={"useState"}
      />
    </>
  );
}
