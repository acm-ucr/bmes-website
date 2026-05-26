"use client";
import { motion } from "motion/react";

const Vision = () => {
  return (
    <div className="from-bmes-blue-300 to-bmes-blue-200 flex min-h-[80vh] w-full flex-col items-center justify-center bg-linear-to-b px-6 py-10 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-6 text-3xl text-white md:text-5xl"
      >
        Our Vision
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mb-5 w-full text-center text-lg text-white md:w-3/4 md:text-2xl"
      >
        The vision of the Biomedical Engineering Society (BMES) is to serve as
        the world's leading society of professionals devoted to developing and
        using engineering and technology to advance human and well being.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full text-center text-lg text-white md:w-3/4 md:text-2xl"
      >
        We at the UC Riverside chapter of this organization are dedicated in
        helping our members achieve their academic goals, whether they be
        pursuing graduate school, medical school, or a career in industry. The
        objective of our events is to help our members to develop professional
        skills required in their chosen career path as well as social skills to
        network with other students with the same goals.
      </motion.div>
    </div>
  );
};

export default Vision;
