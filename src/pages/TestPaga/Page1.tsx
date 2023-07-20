import Page2 from "./Page2";
import { useTestContextProvider } from "../../ContextTest";
import { useEffect } from "react";

export default function Page1() {
  const { number, plus, minus } = useTestContextProvider();
  useEffect(() => {
    console.log("page1 render !");
  }, [number]);
  return (
    <div className="flex flex-col">
      <p>{number}</p>
      <button
        onClick={() => {
          plus();
        }}
      >
        ++
      </button>
      <Page2 />
    </div>
  );
}
