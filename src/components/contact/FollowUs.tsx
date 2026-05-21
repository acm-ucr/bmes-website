"use client";

import SocialLinks from "@/data/contact";
import { motion } from "motion/react";
import SocialIcon from "./SocialIcon";

const FollowMap = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <p className="text-bmes-blue-200 text-center text-5xl">Follow us on</p>
      <div className="mt-2 mb-10 grid grid-cols-2 gap-8">
        {SocialLinks.map(({ icon, url }, index) => (
          <motion.div
            key={index}
            className="p-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <SocialIcon icon={icon} href={url} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FollowMap;
