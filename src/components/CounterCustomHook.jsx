import useCounter from "../hooks/useCounter";
import CounterDisplay from "./CounterDisplay";

export default function CounterCustomHook() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <CounterDisplay
        count={count}
        increment={increment}
        decrement={decrement}
        title={"useCounter (custom hook)"}
      />
    </>
  );
}
