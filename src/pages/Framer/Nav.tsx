import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
import throttle from "lodash/throttle";

interface Props {
  tabList: any;
  handleButton: (idx: number) => void;
}

export default function Navigation({ tabList, handleButton }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [scrollY, setScrollY] = useState(0);

  const handleScrollThrottled = throttle(() => {
    setScrollY(window.scrollY);
  }, 500);

  useEffect(() => {
    // 쓰로틀링된 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScrollThrottled);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  const hide = scrollY > 780;
  console.log(hide);

  const variants = {
    hidden: { opacity: 0, y: 100, rotateY: 300 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        // y: {
        //   type: "spring",
        //   damping: 3,
        //   stiffness: 50,
        //   restDelta: 0.01,
        //   duration: 0.3,
        // },
      },
    },
  };
  return (
    <motion.section
      className={`fixed top-0 left-0 right-0  z-10  pb-4 bg-gray-300 text-black ${
        hide ? "" : "hidden"
      }`}
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      <motion.div
        style={{ scaleX }}
        className="bg-yellow-200 h-5 origin-left"
      />
      <ul className="flex">
        {tabList.map((item: any, idx: number) => {
          return (
            <li
              key={idx}
              onClick={() => {
                handleButton(idx);
              }}
              className="mx-6 list-[upper-none]"
            >
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}
