import { useEffect } from "react";
import Page3 from "./Page3";

export default function Page2() {
  useEffect(() => {
    console.log("page2 render !");
  });
  return (
    <div>
      <Page3 />
    </div>
  );
}
