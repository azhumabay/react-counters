import { createContext } from "react";
import useCounter from "../hooks/useCounter";

export const customHookContext = createContext();

export const CustomHookProvider = ({ children }) => {
  const [count, increment, decrement] = useCounter();

  return (
    <>
      <customHookContext.Provider value={{ count, increment, decrement }}>
        {children}
      </customHookContext.Provider>
    </>
  );
};
