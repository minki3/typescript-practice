import { useEffect, useReducer } from "react";

export default function Page3() {
  useEffect(() => {
    console.log("3");
  });
  const increment = "INCREMENT";
  const decrement = "DECREMENT";

  const reducer = (state: any, action: any) => {
    console.log(state);
    switch (action.type) {
      case increment:
        return { ...state, count: state.count + 1 };
      case decrement:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const initialState = { count: 0, name: "" };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: increment })}>Increment</button>
      <button onClick={() => dispatch({ type: decrement })}>Decrement</button>
    </div>
  );
}
