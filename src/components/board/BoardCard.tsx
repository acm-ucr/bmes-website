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
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="h-48 w-48 object-cover"
        />
      </motion.div>

      <div className="mt-3 flex min-h-14 items-center justify-center px-2 text-2xl leading-tight text-black">
        {name}
      </div>

      <div className="text-bmes-gray-100 mt-0 flex min-h-10 items-center justify-center px-2 text-lg leading-tight font-light uppercase">
        {position}
      </div>

      <button
        type="button"
        onClick={() => setShowAbout(true)}
        className="border-bmes-blue-300 text-bmes-blue-300 hover:bg-bmes-gray-100 mt-2 cursor-pointer rounded-xl border-2 px-4 py-2 text-xl font-light uppercase transition-colors duration-200 hover:text-white"
      >
        About Me
      </button>

      {showAbout && (
        <div className="fixed inset-50 z-50">
          <AboutCard info={about} onClose={() => setShowAbout(false)} />
        </div>
      )}

      <Link
        href={emailLink}
        aria-label={`Email ${name}`}
        className="bg-bmes-blue-300 hover:bg-bmes-gray-100 mt-4 flex items-center justify-center rounded-3xl p-4 shadow-md transition-colors duration-200"
      >
        <HiOutlineMail className="text-4xl text-white transition-colors duration-200" />
      </Link>
    </motion.div>
  );
};

export default BoardCard;
