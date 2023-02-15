import React, { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  bdoy: string;
}
interface OverLoad {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
}

interface Print {
  <T, U>(a: T, b: U): [T, U];
}

function MainPage() {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [data, setData] = useState<Data[]>([]);
  const Data = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => setData(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleBoolean = () => {
    setIsToggle(!isToggle);
  };
  console.log(isToggle);

  const a: string = "hi";

  const b: number = 1234;

  const c: boolean = true;

  useEffect(() => {
    Data();
  }, []);

  console.log(data);

  const generic = <T, E>(e: T, f: E) => {
    if (typeof e === "string") {
      return [e, f];
    }
    return;
  };
  const generic2 = <T,>(e: T): T => {
    return e;
  };

  const number = (e: number) => {
    return e;
  };

  const overLoad: OverLoad = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
  };

  const print: Print = (a, b) => {
    return [a, b];
  };

  const aa = { name: "a" };
  console.log(aa.name);

  console.log(print("1", false));
  console.log(overLoad(1, 2, 3));
  console.log(overLoad(1, 2));

  console.log(generic("dd", "abcde"));
  // console.log(generic<string>("abcde"));
  console.log(generic2(1));
  console.log(generic2(false));
  console.log(generic2("hi"));
  console.log(number(4));

  return (
    <>
      {data.map((item) => {
        return <div key={item.id}>{item.id}</div>;
      })}
      <div>{a}</div>
      <div>{b}</div>
      <div>{c}</div>
      <div> {isToggle}</div>
      <div onClick={ToggleBoolean}>click</div>
      <div></div>
    </>
  );
}

export default MainPage;
