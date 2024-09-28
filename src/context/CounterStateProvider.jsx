import { createContext, useState } from "react";

export const CountContext = createContext();

export const CounterStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((v) => v + 1);
  const decrement = () => setCount((v) => v - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};
