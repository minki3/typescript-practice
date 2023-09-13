import React, { useEffect, useRef } from "react";
import Navigation from "./Nav";
import Project from "./Project";
import About from "./About";
import Introduce from "./Introduce";

export default function Framer() {
  const tabRef = useRef<any>([]);

  const handleButton = (idx: number) => {
    tabRef.current[idx].scrollIntoView();
  };

  return (
    <section>
      <Navigation tabList={tabList} handleButton={handleButton} />
      {tabList.map((item, idx) => {
        return (
          <div
            key={idx}
            ref={(element) => {
              tabRef.current[idx] = element;
            }}
          >
            {item.component}
          </div>
        );
      })}
    </section>
  );
}

const tabList = [
  { title: "Introduce", component: <Introduce /> },
  { title: "About", component: <About /> },
  { title: "Project", component: <Project /> },
];
