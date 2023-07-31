import { useCounter } from "../../CompositContext";

interface Props {
  children: React.ReactNode;
  type: "increment" | "decrement";
}

export default function CounterButton({ children, type }: Props) {
  const { counterPlus, counterMinus } = useCounter();
  return (
    <button onClick={type === "increment" ? counterPlus : counterMinus}>
      {children}
    </button>
  );
}
