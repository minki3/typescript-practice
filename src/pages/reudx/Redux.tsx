import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { combinerAction } from "../../store/combineSlice";
import booleanSlice, { booleanActions } from "../../store/booleanSlice";

const Redux = () => {
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

  return (
    <div>
      {count}
      {boolean ? "true" : "false"}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={toggle}>change</button>
    </div>
  );
};

export default Redux;
