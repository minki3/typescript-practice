import React from "react";
import { Default, Mobile, Tablet, Desktop } from "./ResponsiveWeb";
import Test from "./Test";
import Test2 from "./Test2";
import { useFirst } from "../../Context";
import SecondPage from "./SecondPage";

const Page = () => {
  const { count, input, output, plus } = useFirst();

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
      <div>{count}</div>
      <button
        onClick={() => {
          input(3);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          plus();
        }}
      >
        plus
      </button>
      <SecondPage />
    </div>
  );
};

export default Page;
