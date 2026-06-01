"use client";
import Image from "next/image";
import GearBottomRight from "@/public/gears/gear-bottom-right.svg";
import GearTopRight from "@/public/gears/gear-top-right.svg";
import GearLeft from "@/public/gears/gear-left.svg";
import { motion } from "motion/react";

const fadeInAnimation = {
  initial: { opacity: 0, y: -10 },
  transition: { duration: 1.2 },
  whileInView: { opacity: 1, y: 0 },
};
import SmallGearTopRight from "@/public/gears/abtprgrm-small-gear-topright.svg";
import SmallGearMidLeft from "@/public/gears/abtprgrm-small-gearmidleft.svg";
import SmallGearMidRight from "@/public/gears/abtprgrm-small-gearmidright.svg";
import SmallGearBotLeft from "@/public/gears/abtprgrm-small-gearbotleft.svg";

const AboutProgram = () => {
  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden px-8 py-20 text-center">
      {/* MOBILE GEARS */}
      <Image
        src={SmallGearTopRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -top-[95px] right-0 md:hidden"
      />
      <Image
        src={SmallGearMidLeft}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute top-30 left-0 md:hidden"
      />
      <Image
        src={SmallGearMidRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute top-80 right-0 md:hidden"
      />
      <Image
        src={SmallGearBotLeft}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -bottom-[130px] left-0 md:hidden"
      />

      <Image
        src={GearLeft}
        alt="Decorative gear on the left side"
        className="pointer-events-none absolute -bottom-[80px] left-[0px] z-0 hidden md:block"
      />
      <Image
        src={GearTopRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -top-[20px] -right-[15px] z-0 hidden md:block"
      />
      <Image
        src={GearBottomRight}
        alt="Decorative gear on the bottom right side"
        className="pointer-events-none absolute right-[0px] bottom-[10px] z-0 hidden md:block"
      />

      <motion.div
        {...fadeInAnimation}
        viewport={{ once: true }}
        className="text-bmes-blue-200 z-10 mb-6 text-4xl font-semibold"
      >
      <div className="text-bmes-blue-200 z-10 mb-6 hidden text-4xl font-semibold md:block">
        About The Program
      </motion.div>

      <motion.p
        {...fadeInAnimation}
        viewport={{ once: true }}
        className="z-10 max-w-3xl text-lg leading-8 text-black"
      >
        The Bioengineering Mentorship Program was established in conjunction
        with the{" "}
        <a
          href="https://biggsa.engr.ucr.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bmes-blue-300 underline"
        >
          Bioengineering Interdepartmental Graduate Student Association
          (BIG-GSA)
        </a>{" "}
        to promote better interdepartmental relations in bioengineering.
        Undergraduate students are paired with a graduate or senior level
        student for the school year to help them achieve academic and
        professional success by preparing them for their undergraduate studies
        and how to apply for professional positions.
      </motion.p>

      <motion.p
        {...fadeInAnimation}
        viewport={{ once: true }}
        className="z-10 mt-6 text-lg"
      >
        Applications are currently open!
      </motion.p>

      <motion.a
        {...fadeInAnimation}
        viewport={{ once: true }}
        href="https://docs.google.com/forms/d/e/1FAIpQLSe_JAmygafDcCn9ZOmhAtJMnvt12eJtTAhqDsywWScxiyF5Yg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-bmes-blue-300 z-10 mt-4 rounded-xl px-6 py-3 text-xl font-bold text-white underline shadow-md transition hover:scale-105 md:px-10 md:py-4 md:text-2xl"
      >
        APPLY NOW
      </motion.a>

      <motion.p
        {...fadeInAnimation}
        viewport={{ once: true }}
        className="z-10 mt-8 text-lg"
      >
        For more information, please contact{" "}
        <a
          href="mailto:bmesmentorship@gmail.com"
          className="text-bmes-blue-300 underline"
        >
          bmesmentorship@gmail.com
        </a>
        .
      </motion.p>

      <div className="bg-bmes-blue-200 absolute bottom-0 left-0 h-2 w-full" />
    </div>
  );
};

export default AboutProgram;
