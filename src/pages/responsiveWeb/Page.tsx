import React, { useRef, useState } from "react";
import { Default, Mobile, Tablet, Desktop } from "./ResponsiveWeb";
import Test from "./Test";
import Test2 from "./Test2";
import { useFirst } from "../../Context";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import CustomInput from "./CustomInput";

const Page = () => {
  const { count, input, output, plus } = useFirst();

  const [user, setUser] = useState({
    name: "",
    passward: "",
  });
  console.log("state : ", user);
  const nameRef = useRef<HTMLInputElement>(null);

  const passwardRef = useRef<HTMLInputElement>(null);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const reset = () => {
    setUser({ name: "", passward: "" });
    console.log("reset !");
    nameRef.current?.focus();
  };

  const submit = () => {
    setUser({
      name: nameRef.current?.value || "",
      passward: passwardRef.current?.value || "",
    });
    console.log("submit !");
  };
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
      <div>first : {count}</div>
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
      <button
        onClick={() => {
          output();
        }}
      >
        out
      </button>
      <SecondPage count={count} />
      <ThirdPage />
      <CustomInput type="text" placeholder="test" name="name" ref={nameRef} />
      <CustomInput
        type="text"
        placeholder="test"
        name="passward"
        ref={passwardRef}
      />
      <button onClick={reset}>reset</button>
      <button onClick={submit}>비제어 컴포넌트</button>
    </div>
  );
};

export default Page;

{
  /* <CustomInput
        type="text"
        placeholder="name"
        ref={nameRef}
        onChange={onChange}
        name="name"
        value={user.name}
      />
      <CustomInput
        type="passward"
        placeholder="passward"
        name="passward"
        onChange={onChange}
        value={user.passward}
      /> */
}
