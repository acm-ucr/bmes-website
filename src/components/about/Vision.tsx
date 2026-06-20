"use client";
import { motion } from "motion/react";

const visionAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const Vision = () => {
  return (
    <div className="from-bmes-blue-300 to-bmes-blue-200 flex h-[100vh] flex-col items-center justify-center gap-8 bg-linear-to-b px-6 text-center text-lg text-white md:h-[80vh] md:px-10 md:text-xl lg:text-2xl">
      <motion.div
        {...visionAnimation}
        className="text-3xl md:text-5xl lg:text-6xl"
      >
        Our Vision
      </motion.div>
      <motion.div
        {...visionAnimation}
        transition={{ delay: 0.2 }}
        className="md:w-4/5"
      >
        The vision of the Biomedical Engineering Society (BMES) is to serve as
        the world's leading society of professionals devoted to developing and
        using engineering and technology to advance human and well being.
      </motion.div>

      <motion.div
        {...visionAnimation}
        transition={{ delay: 0.4 }}
        className="md:w-4/5"
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
