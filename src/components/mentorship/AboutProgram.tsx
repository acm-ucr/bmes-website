"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

import bottomLeftLarge from "@/public/mentorship/bottomLeftLarge.svg";
import bottomRightLarge from "@/public/mentorship/bottomRightLarge.svg";
import topRightLarge from "@/public/mentorship/topRightLarge.svg";

import topRightSmall from "@/public/mentorship/topRightSmall.svg";
import middleLeftSmall from "@/public/mentorship/middleLeftSmall.svg";
import bottomRightSmall from "@/public/mentorship/bottomRightSmall.svg";
import bottomLeftSmall from "@/public/mentorship/bottomLeftSmall.svg";

const fadeInAnimation = {
  initial: { opacity: 0, y: -10 },
  transition: { duration: 2 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutProgram = () => {
  return (
    <div className="relative flex min-h-fit w-full flex-col items-center justify-center gap-5 overflow-hidden p-8 text-center md:h-[90vh]">
      <Image
        src={topRightSmall}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute top-0 right-0 md:hidden"
      />
      <Image
        src={middleLeftSmall}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute bottom-1/2 left-0 md:hidden"
      />
      <Image
        src={bottomRightSmall}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute right-0 bottom-1/5 md:hidden"
      />
      <Image
        src={bottomLeftSmall}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute bottom-0 left-0 md:hidden"
      />

      <Image
        src={bottomLeftLarge}
        alt="Decorative gear on the left side"
        className="pointer-events-none absolute bottom-0 left-0 z-0 hidden md:block"
      />
      <Image
        src={topRightLarge}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute top-0 right-0 z-0 hidden md:block"
      />
      <Image
        src={bottomRightLarge}
        alt="Decorative gear on the bottom right side"
        className="pointer-events-none absolute right-0 bottom-0 z-0 hidden md:block"
      />

      <motion.div
        {...fadeInAnimation}
        viewport={{ once: true }}
        className="text-bmes-blue-200 z-10 mb-6 hidden text-5xl md:block"
      >
        About The Program
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition={{ delay: 0.2 }}
        className="z-10 text-lg text-black lg:w-3/5"
      >
        The Bioengineering Mentorship Program was established in conjunction
        with the{" "}
        <Link
          href="https://biggsa.engr.ucr.edu/"
          target="_blank"
          className="text-bmes-blue-300 underline"
        >
          Bioengineering Interdepartmental Graduate Student Association
          (BIG-GSA)
        </Link>{" "}
        to promote better interdepartmental relations in bioengineering.
        Undergraduate students are paired with a graduate or senior level
        student for the school year to help them achieve academic and
        professional success by preparing them for their undergraduate studies
        and how to apply for professional positions.
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition={{ delay: 0.4 }}
        className="z-10 text-lg"
      >
        Applications are currently open!
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition-transform={{ delay: 0.6 }}
        className="bg-bmes-blue-300 z-10 rounded-xl px-6 py-3 text-xl font-bold text-white underline shadow-md transition hover:scale-105 md:px-10 md:py-4 md:text-2xl"
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_JAmygafDcCn9ZOmhAtJMnvt12eJtTAhqDsywWScxiyF5Yg/viewform"
          target="_blank"
        >
          APPLY NOW
        </Link>
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition={{ delay: 0.8 }}
        className="z-10 text-lg"
      >
        For more information, please contact{" "}
        <Link
          href="mailto:bmesmentorship@gmail.com"
          className="text-bmes-blue-300 underline"
        >
          bmesmentorship@gmail.com
        </Link>
        .
      </motion.div>
    </div>
  );
};

export default AboutProgram;
