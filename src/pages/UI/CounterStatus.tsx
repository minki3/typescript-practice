import { useCounter } from "../../CompositContext";

export default function CounterStatus() {
  const { counter } = useCounter();
  return <p>{counter}</p>;
}
