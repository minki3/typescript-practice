import React from "react";
import { useContextReducer } from "../../ReducerContext";

export default function TestPage2() {
  const { state, dispatch } = useContextReducer();
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
