import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const skillsVariants = {
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
  const skills = {
    hidden: {
      x: -600,
      opacity: 0, // translateX(-600)
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="h-[830px]" ref={ref}>
      <motion.div
        animate={control}
        variants={skillsVariants}
        className="text-2xl flex justify-center items-center h-[200px]"
      >
        Project
      </motion.div>
      <motion.section
        className="flex justify-evenly"
        variants={skillsVariants}
        animate={control}
      >
        <motion.div
          className="w-[300px] h-[300px] bg-yellow-400"
          variants={skills}
        >
          about1
        </motion.div>
        <motion.div
          className="w-[300px] h-[300px] bg-yellow-400"
          variants={skills}
        >
          about1
        </motion.div>
        <motion.div
          className="w-[300px] h-[300px] bg-yellow-400"
          variants={skills}
        >
          about1
        </motion.div>
      </motion.section>
    </section>
  );
}
