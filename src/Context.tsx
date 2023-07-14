import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export const firstContext = createContext<any>(undefined);

export const FirstContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState("1");

  const input = (id: string) => {
    if (count !== id) {
      setCount(id);
    }
  };
  const output = () => {
    setCount("");
  };
  const plus = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("hi");
  }, [count]);

  return (
    <firstContext.Provider value={{ count, input, output, plus }}>
      {children}
    </firstContext.Provider>
  );
};

export const useFirst = () => useContext(firstContext);
