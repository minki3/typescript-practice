import { useEffect, useState, useCallback, useMemo } from "react";
import Page3 from "./Page3";

import React from "react";

// interface Props {
//   count: number;
// }

const Page2 = () => {
  useEffect(() => {
    console.log("page2 render !");
  });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // useMemo(() => {
  //   console.log(y);
  // }, [x]);
  const functioncallback = useCallback(() => {
    console.log(y);
  }, [x]);
  functioncallback();
  return (
    <div>
      <Page3 />
      <button onClick={() => setX((prev) => prev + 1)}>X</button>
      <button onClick={() => setY((prev) => prev + 1)}>Y</button>
    </div>
  );
};

export default React.memo(Page2);
