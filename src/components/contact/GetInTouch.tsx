"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import GetInTouchImg from "@/public/contact/getInTouch.webp";

const touchAnimation = {
  initial: { x: 30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true },
};

const GetInTouch = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center gap-8 place-self-center rounded-2xl bg-white p-6 sm:p-8 md:flex-row md:gap-12 md:p-10">
      <div className="flex flex-col gap-4 py-6 text-center md:w-1/2 md:text-left">
        <motion.div
          {...touchAnimation}
          className="text-bmes-blue-100 pb-4 text-3xl md:text-4xl lg:pb-8 lg:text-5xl"
        >
          Get in Touch!
        </motion.div>

        <motion.div {...touchAnimation} transition={{ delay: 0.2 }}>
          Whether you are a first year interested in meeting new people or a
          third year looking into internships and learning opportunities, the
          Biomedical Engineering Society is the place for you!
        </motion.div>

        <motion.div {...touchAnimation} transition={{ delay: 0.4 }}>
          FOR MEMBERSHIP REQUESTS, please visit and join at{" "}
          <Link
            href="https://highlander.ucr.edu/organization/bmes"
            className="text-bmes-blue-300 underline"
          >
            HighlanderLink
          </Link>{" "}
          and you will be added to our membership roster and mailing list!
        </motion.div>
      </div>

      <motion.div
        {...touchAnimation}
        transition={{ delay: 0.6 }}
        className="w-full md:w-1/2 lg:w-1/3"
      >
        <Image src={GetInTouchImg} alt="Get in Touch" className="w-full" />
      </motion.div>
    </div>
  );
};

export default GetInTouch;
