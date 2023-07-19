import React from "react";

interface Props {
  count: number;
}
const SecondPage = ({ count }: Props) => {
  console.log("Secondrender");
  return <div>second : {count}</div>;
};

export default React.memo(SecondPage);
