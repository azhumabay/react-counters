import { createContext, useState } from "react";

export const stateContext = createContext();

export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((v) => v + 1);
  const decrement = () => setCount((v) => v - 1);

  return (
    <stateContext.Provider value={{ count, increment, decrement }}>
      {children}
    </stateContext.Provider>
  );
};
