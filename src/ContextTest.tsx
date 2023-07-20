import { createContext, useContext, useState, ReactNode } from "react";

interface TestContextType {
  number: number;
  plus: () => void;
  minus: () => void;
}

export const TestContext = createContext<TestContextType>({
  number: 2,
  plus: () => {},
  minus: () => {},
});

export const TestContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [number, setNumber] = useState(1);

  const plus = () => {
    setNumber((prev) => prev + 1);
  };
  const minus = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <TestContext.Provider value={{ number, plus, minus }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContextProvider = () => useContext(TestContext);
