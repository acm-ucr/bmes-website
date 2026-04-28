"use client";

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
}

const BoardCard = ({ name, image, position, emailLink, about }: CardInfo) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="relative flex flex-col items-center text-center">
      <Image src={image} alt={name} />
      <div className="mt-4 text-2xl text-black">{name}</div>

      <div className="text-bmes-gray-100 mt-2 text-lg font-light uppercase">
        {position}
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowAbout(true)}
          className="border-bmes-blue-300 text-bmes-blue-300 mt-4 rounded-xl border-2 px-4 py-3 text-xl font-light uppercase"
        >
          About Me
        </button>
        {showAbout && (
          <AboutCard info={about} onClose={() => setShowAbout(false)} />
        )}
      </div>

      <Link
        href={emailLink}
        aria-label={`Email ${name}`}
        className="bg-bmes-blue-300 mt-6 flex items-center justify-center rounded-3xl p-4 shadow-md"
      >
        <HiOutlineMail className="text-4xl text-white" />
      </Link>
    </div>
  );
};

export default BoardCard;
