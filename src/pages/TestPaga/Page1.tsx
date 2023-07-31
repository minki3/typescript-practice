import Page2 from "./Page2";
import { useTestContextProvider } from "../../ContextTest";
import { useEffect, useState } from "react";
import Page3 from "./Page3";

export default function Page1() {
  const [testnumber, setTestnumber] = useState<number>(0);
  const { number, plus, minus } = useTestContextProvider();
  useEffect(() => {
    console.log("page1 render !");
  }, [number]);

  return (
    <div className="flex flex-col">
      <p>{number}</p>
      <button
        onClick={() => {
          // plus();
          setTestnumber(0);
        }}
      >
        ++
      </button>
      <Page2 homo={testnumber} />
    </div>
  );
}
