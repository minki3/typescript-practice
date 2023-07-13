import React, { ReactNode, createContext } from "react";

export const firstContext = createContext<any>(undefined);

export const firstContextProvider = ({ children }: { children: ReactNode }) => {
  const initialValue = {
    name: "kim",
    age: 20,
  };
  return (
    <firstContext.Provider value={initialValue}>
      {children}
    </firstContext.Provider>
  );
};
