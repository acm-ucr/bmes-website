"use client";

import SocialLinks from "@/data/contact";
import { motion } from "motion/react";
import SocialIcon from "../SocialIcon";

const socialAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
};

const FollowMap = () => {
  return (
    <div className="flex h-[25vh] min-h-fit flex-col items-center gap-8 py-8">
      <div className="text-bmes-blue-200 text-center text-3xl md:text-4xl lg:text-5xl">
        Follow us on
      </div>
      <div className="grid min-w-fit grid-cols-2 justify-between gap-8 md:flex md:w-2/5">
        {SocialLinks.map(({ icon, url }, index) => (
          <motion.div
            key={index}
            {...socialAnimation}
            transition={{ delay: index * 0.1 }}
          >
            <SocialIcon icon={icon} href={url} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FollowMap;
