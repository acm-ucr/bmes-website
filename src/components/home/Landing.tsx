import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import GearBottomRight from "@/public/gears/bottomRightGear.svg";
import GearTopRight from "@/public/gears/topRightGear.svg";
import GearLeft from "@/public/gears/leftGear.svg";
import SmallGearLeft from "@/public/gears/small_left_gear.svg";
import SmallTopGearRight from "@/public/gears/small_topright_gear.svg";
import SmallBottomGearRight from "@/public/gears/small_bottomright_gear.svg";

import SocialIcon from "../SocialIcon";

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden px-8 py-32 text-center">
      <Image
        src={GearLeft}
        alt="Decorative gear on the left side"
        className="pointer-events-none absolute -bottom-[50px] left-[0px] z-0 hidden md:block"
      />
      <Image
        src={GearTopRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -top-[0px] -right-[15px] z-0 hidden md:block"
      />
      <Image
        src={GearBottomRight}
        alt="Decorative gear on the bottom right side"
        className="pointer-events-none absolute right-[0px] bottom-[0px] z-0 hidden md:block"
      />

      <Image
        src={SmallGearLeft}
        alt="Decorative gear on the left side"
        className="pointer-events-none absolute -top-[0px] left-[0px] z-0 block md:hidden"
      />
      <Image
        src={SmallTopGearRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -top-[-370px] -right-[15px] z-0 block md:hidden"
      />
      <Image
        src={SmallBottomGearRight}
        alt="Decorative gear on the bottom right side"
        className="pointer-events-none absolute right-[0px] bottom-[0px] z-0 block md:hidden"
      />

      <div className="z-10 max-w-5xl text-2xl leading-8 text-black md:text-3xl">
        Welcome to the University of California, Riverside chapter of BMES! We
        aim to promote professional development and social skills among
        bioengineers at UCR through our events.
      </div>

      <div className="z-10 mt-12 flex flex-col items-center gap-4">
        <div className="justify max-w-lg flex-col text-2xl md:text-3xl">
          Check Us Out on <div>Instagram BMES@UCR</div>
        </div>
        <Link
          href="https://www.instagram.com/bmesatucr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bmes-gray-100 text-2xl font-semibold underline md:text-3xl"
        >
          @bmesatucr
        </Link>
        <SocialIcon
          href="https://www.instagram.com/bmesatucr"
          icon={FaInstagram}
        />
      </div>
    </div>
  );
};

export default Landing;
