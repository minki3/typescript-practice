import React from "react";
import { useContext } from "react";
import { firstContext, useFirst } from "../../Context";

export default function ContextCheck() {
  const context = useFirst();
  console.log(context);
  return (
    <div>
      <p>{context.count}</p>
      <button
        onClick={() => {
          context.input(2);
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          context.plus();
        }}
      >
        plus
      </button>
    </div>
  );
}
