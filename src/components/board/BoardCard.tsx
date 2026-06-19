"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import AboutCard from "./AboutCard";

interface CardInfo {
  name: string;
  image: StaticImageData;
  position: string;
  emailLink: string;
  about: string;
  index: number;
}

const boardAnimation = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const BoardCard = ({
  name,
  image,
  position,
  emailLink,
  about,
  index,
}: CardInfo) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <motion.div
      {...boardAnimation}
      transition={{ delay: (index % 4) * 0.1 }}
      className="relative flex flex-col items-center text-center"
    >
      <Image src={image} alt={name} />

      <div className="mt-3 flex min-h-14 items-center justify-center px-2 text-2xl leading-tight text-black">
        {name}
      </div>

      <div className="text-bmes-gray-100 flex min-h-10 items-center justify-center px-2 text-lg leading-tight font-light uppercase">
        {position}
      </div>

      <motion.div
        onClick={() => setShowAbout(true)}
        whileHover={{ scale: 1.1 }}
        className="border-bmes-blue-300 text-bmes-blue-300 mt-3 cursor-pointer rounded-xl border-2 px-4 py-2 text-xl font-light uppercase"
      >
        About Me
      </motion.div>

      {showAbout && (
        <div className="fixed inset-50 z-50">
          <AboutCard info={about} onClose={() => setShowAbout(false)} />
        </div>
      )}

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="bg-bmes-blue-300 mt-4 flex items-center justify-center rounded-3xl p-4"
      >
        <Link href={emailLink}>
          <HiOutlineMail className="text-4xl text-white" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BoardCard;
