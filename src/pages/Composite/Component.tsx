import React from "react";
import { Counter } from "../../CompositContext";

export default function Component() {
  return (
    <div>
      <Counter initValue={0} maximum={100} minimum={0}>
        <Counter.Title>타이틀</Counter.Title>
        <Counter.Status />
        <Counter.Button type="increment">+</Counter.Button>
        <Counter.Button type="decrement">-</Counter.Button>
      </Counter>
    </div>
  );
}
