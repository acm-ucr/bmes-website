import Image from "next/image";
import Link from "next/link";

import GearBottomRight from "@/public/gears/bottomRightGear.svg";
import GearTopRight from "@/public/gears/topRightGear.svg";
import GearLeft from "@/public/gears/leftGear.svg";

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden px-8 py-32 text-center">
      <Image
        src={GearLeft}
        alt="Decorative gear on the left side"
        className="pointer-events-none absolute -bottom-[50px] left-[0px] z-0"
      />
      <Image
        src={GearTopRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -top-[0px] -right-[15px] z-0"
      />
      <Image
        src={GearBottomRight}
        alt="Decorative gear on the bottom right side"
        className="pointer-events-none absolute right-[0px] bottom-[0px] z-0"
      />

      <p className="z-10 max-w-5xl text-3xl leading-8 text-black">
        Welcome to the University of California, Riverside chapter of BMES! We
        aim to promote professional development and social skills among
        bioengineers at UCR through our events.
      </p>

      <div className="z-10 mt-12">
        <p className="text-3xl text-black">
          Check Us Out on <br /> Instagram BMES@UCR
        </p>
        <Link
          href="https://www.instagram.com/bmesatucr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bmes-gray-100 text-3xl font-semibold underline"
        >
          @bmesatucr
        </Link>
      </div>

      <div className="bg-bmes-blue-200 absolute bottom-0 left-0 h-2 w-full" />
    </div>
  );
};

export default Landing;
