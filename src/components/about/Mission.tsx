"use client";
import Image from "next/image";
import gear1 from "@/public/mission/gear-1.svg";
import gear2 from "@/public/mission/gear-2.svg";
import gear3 from "@/public/mission/gear-3.svg";

import gear1Sm from "@/public/gears/gear-1-sm.svg";
import gear2Sm from "@/public/gears/gear-2-sm.svg";
import gear3Sm from "@/public/gears/gear-3-sm.svg";

import { motion } from "motion/react";

const missionAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const Mission = () => {
  return (
    <div className="relative flex h-[60vh] items-center justify-center overflow-hidden p-4">
      <Image
        src={gear1}
        alt="Decorative gear in the top left corner"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 hidden lg:block"
      />
      <Image
        src={gear3}
        alt="Large decorative gear in the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 hidden lg:block"
      />
      <Image
        src={gear2}
        alt="Small decorative gear near the bottom right"
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 bottom-0 z-0 hidden lg:block"
      />
      <Image
        src={gear3Sm}
        alt="Decorative gear in the top left corner"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 block lg:hidden"
      />
      <Image
        src={gear2Sm}
        alt="Decorative gear in the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 block lg:hidden"
      />
      <Image
        src={gear1Sm}
        alt="Decorative gear in middle right"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 z-0 block lg:hidden"
      />
      <div className="relative z-10 text-center md:w-4/5">
        <motion.div
          {...missionAnimation}
          className="text-bmes-blue-200 mb-4 text-3xl md:text-5xl lg:text-6xl"
        >
          Mission Statement
        </motion.div>
        <motion.div
          {...missionAnimation}
          transition={{ delay: 0.2 }}
          className="pt-4 text-lg md:text-xl lg:pt-6 lg:text-2xl"
        >
          The Mission of the BMES is to build and support the biomedical
          engineering community, locally, nationally, and internationally, with
          activities designed to communicate recent advances, discoveries, and
          inventions; promote education and professional development; and
          integrate the perspectives of the academic, medical, governmental, and
          business sectors.
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
