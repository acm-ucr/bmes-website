"use client";

import { IoMdClose } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";

interface AboutInfo {
  info: string;
  onClose: () => void;
}

const AboutCard = ({ info, onClose }: AboutInfo) => {
  return (
    <div className="from-bmes-blue-400 to-bmes-blue-200 absolute left-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 rounded-md bg-gradient-to-b px-8 py-10 text-left font-extralight shadow-xl">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-4xl text-white"
        aria-label="Close about popup"
      >
        <IoMdClose className="cursor-pointer" />
      </button>

      <RiDoubleQuotesL className="mb-3 text-left text-3xl text-white" />

      <div className="mr-8 ml-8 text-lg text-white">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default AboutCard;
