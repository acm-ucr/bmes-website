"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { HiOutlineMail } from "react-icons/hi";

interface CardInfo {
  name: string;
  image: StaticImageData;
  position: string;
  emailLink: string;
}

const BoardCard = ({ name, image, position, emailLink }: CardInfo) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-48 w-48 rounded-full bg-white shadow-xl">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="scale-125 object-cover"
          />
        </div>
      </div>

      <div className="mt-4 text-2xl text-black">{name}</div>

      <div className="text-bmes-gray-100 mt-2 text-lg font-light uppercase">
        {position}
      </div>

      <div>
        <button
          type="button"
          className="border-bmes-blue-300 text-bmes-blue-300 mt-4 rounded-xl border-2 px-4 py-3 text-xl font-light uppercase"
        >
          About Me
        </button>
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
