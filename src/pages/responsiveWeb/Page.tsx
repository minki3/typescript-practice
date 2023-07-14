import React from "react";
import { Default, Mobile, Tablet, Desktop } from "./ResponsiveWeb";
import Test from "./Test";
import Test2 from "./Test2";
import { useFirst } from "../../Context";

const Page = () => {
  const first = useFirst();
  console.log(first.count);
  return (
    <div>
      <Default children={<Test />}></Default>
      <Default children={<Test2 />}></Default>
      <Mobile>
        <div>mobile</div>
      </Mobile>
      <Tablet>
        <div>tablet</div>
      </Tablet>
      <Desktop>
        <div>desktop</div>
      </Desktop>
      <div>{first.count}</div>
    </div>
  );
};

export default Page;
