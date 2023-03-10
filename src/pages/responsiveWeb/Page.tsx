import React from "react";
import { Default, Mobile, Tablet, Desktop } from "./ResponsiveWeb";
import Test from "./Test";
import Test2 from "./Test2";

const Page = () => {
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
    </div>
  );
};

export default Page;
