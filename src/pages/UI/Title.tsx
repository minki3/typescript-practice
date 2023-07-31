interface Props {
  children: React.ReactNode;
}

export default function CounterTitle({ children }: Props) {
  return <h2>{children}</h2>;
}
