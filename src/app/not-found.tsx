"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

import gear404TopLeftLarge from "@/public/404/404TopGearLarge.svg";
import gear404BottomCenterLarge from "@/public/404/404BottomGearLarge.svg";
import gear404BottomRightLarge from "@/public/404/404RightGearLarge.svg";
import gear404TopLeftSmall from "@/public/404/404TopGearSmall.svg";
import gear404BottomCenterSmall from "@/public/404/404BottomGearSmall.svg";
import gear404BottomRightSmall from "@/public/404/404RightGearSmall.svg";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[87vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={gear404TopLeftSmall}
        alt="Decorative gear"
        className="absolute top-0 left-0 -z-10 md:hidden"
      />

      <Image
        src={gear404BottomCenterSmall}
        alt="Decorative gear"
        className="absolute bottom-0 -z-10 mr-8 md:hidden"
      />

      <Image
        src={gear404BottomRightSmall}
        alt="Decorative gear"
        className="absolute right-0 bottom-0 -z-10 md:hidden"
      />

      <Image
        src={gear404TopLeftLarge}
        alt="Decorative gear"
        className="absolute top-0 left-0 -z-10 hidden md:block"
      />

      <Image
        src={gear404BottomCenterLarge}
        alt="Decorative gear"
        className="absolute right-3/4 bottom-0 -z-10 hidden md:block"
      />

      <Image
        src={gear404BottomRightLarge}
        alt="Decorative gear"
        className="absolute right-0 bottom-0 -z-10 hidden md:block"
      />

      <div className="flex flex-col items-center gap-2">
        <div className="text-bmes-blue-200 text-9xl font-bold">404</div>
        <div className="text-3xl font-light">Page Not Found</div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-bmes-blue-300 mt-8 rounded-3xl p-5 text-white shadow-lg"
        >
          <Link href="/">Return Home</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
