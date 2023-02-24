import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { combinerAction } from "../../store/combineSlice";
import { booleanActions } from "../../store/booleanSlice";
import { inputSliceAction } from "../../store/inuptSlice";

const Redux = () => {
  const size = {
    "260": 9000,
    "270": 10000,
    "280": 1000000,
  };

  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.combineSlice.curCounter);

  const boolean = useAppSelector((state) => state.booleanSlice.toggletf);

  const plus = () => {
    dispatch(combinerAction.plus());
  };
  const minus = () => {
    dispatch(combinerAction.minus());
  };

  const toggle = () => {
    dispatch(booleanActions.toggle());
  };
  const inputSize = () => {
    dispatch(inputSliceAction.input(size));
  };

  const input = useAppSelector((state) => state.inputSlice);
  console.log(input);

  return (
    <div>
      {count}
      {boolean ? "true" : "false"}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={toggle}>change</button>
      <button onClick={inputSize}>input</button>
    </div>
  );
};

export default Redux;
