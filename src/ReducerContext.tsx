import React, { createContext, useContext, useReducer } from "react";

const ReducerContext = createContext<any>(undefined);

// 리듀서 함수
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

export const ReducerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

// 커스텀 훅으로 Context 사용
export const useContextReducer = () => {
  return useContext(ReducerContext);
};
