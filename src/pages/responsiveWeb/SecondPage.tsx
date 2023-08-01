import React from "react";

interface Props {
  count: number;
}
const SecondPage = ({ count }: Props) => {
  return <div>second : {count}</div>;
};

export default React.memo(SecondPage);
