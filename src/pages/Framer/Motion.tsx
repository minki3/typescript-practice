import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { opacity } from "html2canvas/dist/types/css/property-descriptors/opacity";

export default function Framer() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const skillsRef = useRef<HTMLDivElement>(null);

  const skillsVariants = {
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
    <>
      <motion.div
        style={{ scaleX }}
        className=" fixed bg-yellow-200 h-5 top-0 left-0 right-0 origin-left z-10"
      />
      <section className="">
        <motion.div
          variants={boxVariants}
          initial="out"
          animate="in"
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" text-5xl flex justify-center items-center flex-col w-full h-[820px]"
        >
          <motion.div variants={iconVariants} className="mb-4">
            hello ! my name is min ki
          </motion.div>
          <motion.div variants={iconVariants}>
            I'm Front-End Developer
          </motion.div>
        </motion.div>
      </section>
      <section
        className="bg-white text-black p-2 overflow-scroll  h-[500px] "
        ref={skillsRef}
      >
        <motion.div
          className=" text-2xl bg-yellow-400 h-[300px]"
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: skillsRef, once: true, amount: 0.3 }}
        >
          about
        </motion.div>
        <motion.div
          className=" text-2xl bg-yellow-400 h-[300px]"
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: skillsRef, once: true, amount: 0.3 }}
        >
          about
        </motion.div>
        <motion.div
          className=" text-2xl bg-yellow-400 h-[300px]"
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: skillsRef, once: true, amount: 0.3 }}
        >
          about
        </motion.div>
        <motion.div
          className=" text-2xl bg-yellow-400 h-[300px]"
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: skillsRef, once: true, amount: 0.3 }}
        >
          about
        </motion.div>
      </section>
    </>
  );
}
