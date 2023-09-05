import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { opacity } from "html2canvas/dist/types/css/property-descriptors/opacity";

export default function Framer() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 100, rotateY: 300 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        rotateY: {
          duration: 0.3,
        },
        y: {
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.01,
          duration: 0.3,
        },
      },
    },
  };

  return (
    <div className=" mt-5 h-full text-white ">
      <motion.div
        style={{ scaleX }}
        className=" fixed bg-yellow-200 h-5 top-0 left-0 right-0 origin-left z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: [1, 1.5, 2] }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" flex font-bold justify-center items-center text-2xl h-[800px]"
      >
        hello my name is minki
      </motion.div>
      <div
        ref={scrollRef}
        className="flex font-bold justify-center items-center text-2xl"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef, amount: 0.8 }}
        >
          I am Front-End developer
        </motion.div>
      </div>
    </div>
  );
}
