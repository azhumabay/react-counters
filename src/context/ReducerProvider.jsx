import { createContext, useReducer } from "react";
import { counterReducer, initialState } from "../reducer";

export const reducerContext = createContext();

export const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <reducerContext.Provider value={{ state, dispatch }}>
        {children}
      </reducerContext.Provider>
    </>
  );
};
