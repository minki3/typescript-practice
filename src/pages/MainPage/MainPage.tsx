import React, { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  bdoy: string;
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

  const generic = <T, E>(e: T, f: E): T +E=> {
    return e + f;
  };
  console.log(generic<number>(3, 3));
  // console.log(generic<string>("abcde"));
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
