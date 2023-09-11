import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
import Project from "./Project";
import About from "./About";
import Introduce from "./Introduce";

export default function Framer() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // useEffect(() => {
  //   window.onbeforeunload = function pushRefresh() {
  //     window.scrollTo(0, 0);
  //   };
  // }, []); //
  // const tabRef = useRef<React.RefObject<any>[]>([]);
  const tabRef = useRef<any>([]);
  // const tabRef = useRef<any>(null);
  console.log(tabRef);
  const handleButton = () => {
    // tabRef.current.scrollIntoView();
  };

  return (
    <section>
      {/* <motion.div
        style={{ scaleX }}
        className=" fixed bg-yellow-200 h-5 top-0 left-0 right-0 origin-left z-10"
      />

      <Introduce
        ref={(element) => {
          tabRef.current[idx] = element;
        }}
        // ref={tabRef}
      />

      <About />
      <Project /> */}

      {tabList.map((item, idx) => {
        return (
          <div
            key={idx}
            ref={(element) => {
              tabRef.current[idx] = element;
            }}
          >
            {item}
          </div>
        );
      })}
      <button onClick={handleButton}>클릭클릭클릭</button>
    </section>
  );
}

const tabList = [<Introduce />, <About />, <Project />];
