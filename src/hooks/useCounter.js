import { useCallback, useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const incrementHandler = useCallback(() => {
    setCount((v) => v + 1);
  });

  const decrementHandler = useCallback(() => {
    setCount((v) => v - 1);
  });

  return [count, incrementHandler, decrementHandler];
}
