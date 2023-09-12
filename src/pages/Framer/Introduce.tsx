import React, { forwardRef, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Introduce(props: any, ref: any) {
  const boxVariants = {
    out: {
      y: 600,
      opacity: 0,
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        // first child는 parent가 나타나고 0.5s 후에 나타난다.
        delayChildren: 0.5,
        // first child의 sibling child는 0.5s의 간격을 두고 나타난다
        staggerChildren: 0.5,
        // staggerChildren이 없다면
        //모든 child가 parent가 나타나고0.5s 후 동시에 나타난다.
      },
    },
  };

  const iconVariants = {
    out: {
      x: -600,
      opacity: 0, // translateX(-600)
    },
    in: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="h-[830px] flex justify-center items-center " ref={ref}>
      <motion.div
        variants={boxVariants}
        initial="out"
        animate="in"
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" text-5xl flex justify-center items-center flex-col w-full "
      >
        <motion.div variants={iconVariants} className="mb-4">
          hello ! my name is min ki
        </motion.div>
        <motion.div variants={iconVariants}>I'm Front-End Developer</motion.div>
      </motion.div>
    </section>
  );
}

export default forwardRef(Introduce);
