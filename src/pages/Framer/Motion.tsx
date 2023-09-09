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
  const scrollRef = useRef(null);
  const divRef = useRef<HTMLDivElement>(null);

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
      <div className=" mt-5 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [1, 1.5, 2] }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" flex font-bold justify-center items-center text-2xl h-[500px]"
        >
          hello my name is minki
        </motion.div>
        <div
          ref={scrollRef}
          className="flex font-bold justify-center items-center text-2xl h-[300px]"
        ></div>
        <motion.div
          className=" w-[500px] h-[500px] bg-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        />
        <motion.div
          ref={divRef}
          className=" bg-white h-[500px]"
          initial={{ opacity: 0.2 }}
          whileInView={{
            opacity: 1,
            rotate: [0, 360],
            borderRadius: ["20%", "50%"],
            transition: { delay: 0.05 },
          }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            // 처음 마운트 될 때 상태,
            // 마운트시 애니메이션을 원하지 않다면 initial = {false}
            x: 0,
          }}
          animate={{
            // 애니메이션이 끝났을 때의 상태
            x: 50,
          }}
          transition={{
            // animate state까지 어떻게 변할지 정하는 옵션
            // 여러 transition type을 정의 할 수 있다.
            ease: "easeIn",
            duration: 0.7,
          }}
        >
          test
        </motion.div>
        <motion.div
          variants={boxVariants}
          initial="out"
          animate="in"
          className=" text-2xl flex justify-center items-center flex-col py-[100px]"
        >
          <motion.div
            variants={iconVariants}
            // parent의 initial, animate를 그대로 상속받기 때문에
            // 속성을 입력하지 않아도된다.
          >
            my name is
          </motion.div>
          <motion.div variants={iconVariants}>min ki</motion.div>
        </motion.div>
        <div ref={scrollRef} className=" flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef, once: true, amount: 0.8 }}
            className="h-[500px]"
          >
            scroll motion
          </motion.div>
        </div>
      </div>
    </>
  );
}
