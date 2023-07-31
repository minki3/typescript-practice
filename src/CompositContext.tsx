import React, { createContext, useContext, useState } from "react";
import CounterButton from "./pages/UI/Button";
import CounterTitle from "./pages/UI/Title";
import CounterStatus from "./pages/UI/CounterStatus";

interface Props {
  children: React.ReactNode;
  initValue: number;
  minimum?: number;
  maximum?: number;
}

const compositeContext = createContext({
  counter: 0,
  counterPlus: () => {},
  counterMinus: () => {},
});

export const Counter = ({ children, initValue, minimum, maximum }: Props) => {
  const [counter, setCounter] = useState(initValue);

  const counterPlus = () => {
    setCounter((prev) => {
      if (maximum === undefined) {
        return prev + 1;
      } else {
        return prev < maximum ? prev + 1 : prev;
      }
    });
  };

  const counterMinus = () => {
    setCounter((prev) => {
      if (minimum === undefined) {
        return prev - 1;
      } else {
        return prev > minimum ? prev - 1 : prev;
      }
    });
  };

  return (
    <compositeContext.Provider value={{ counter, counterPlus, counterMinus }}>
      {children}
    </compositeContext.Provider>
  );
};

Counter.Title = CounterTitle;
Counter.Button = CounterButton;
Counter.Status = CounterStatus;

export const useCounter = () => useContext(compositeContext);
