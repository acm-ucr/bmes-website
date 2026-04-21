import Link from "next/link";
import Image from "next/image";

import GearBottomRight from "@/public/gears/gear-bottom-right.svg";
import GearTopRight from "@/public/gears/gear-top-right.svg";
import GearLeft from "@/public/gears/gear-left.svg";

interface AboutProgramProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
  contactEmail: string;
}

const AboutProgram = ({
  title,
  description,
  linkText,
  linkHref,
  subtext,
  buttonText,
  buttonHref,
  contactEmail,
}: AboutProgramProps) => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-8 py-20 text-center">
      <Image
        src={GearLeft}
        alt="Decorative gear on the left side"
        className="pointer-events-none absolute -bottom-[80px] left-[0px] z-0 opacity-70"
      />
      <Image
        src={GearTopRight}
        alt="Decorative gear on the top right side"
        className="pointer-events-none absolute -top-[20px] -right-[15px] z-0 opacity-70"
      />
      <Image
        src={GearBottomRight}
        alt="Decorative gear on the bottom right side"
        className="pointer-events-none absolute right-[0px] bottom-[10px] z-0 opacity-70"
      />

      <h1 className="text-bmes-blue-200 z-10 mb-6 text-4xl font-semibold">
        {title}
      </h1>

      <p className="z-10 max-w-3xl text-lg leading-8 text-black">
        {description}{" "}
        <Link href={linkHref} className="text-bmes-blue-300 underline">
          {linkText}
        </Link>{" "}
        to promote better interdepartmental relations in bioengineering.
        Undergraduate students are paired with a graduate or senior level
        student for the school year to help them achieve academic and
        professional success by preparing them for their undergraduate studies
        and how to apply for professional positions.
      </p>

      <p className="z-10 mt-6 text-lg">{subtext}</p>

      <Link
        href={buttonHref}
        className="bg-bmes-blue-300 z-10 mt-4 rounded-xl px-10 py-4 text-2xl font-bold text-white underline shadow-md transition hover:scale-105"
      >
        {buttonText}
      </Link>

      <p className="z-10 mt-8 text-lg">
        For more information, please contact{" "}
        <Link
          href={`mailto:${contactEmail}`}
          className="text-bmes-blue-300 underline"
        >
          {contactEmail}
        </Link>
        .
      </p>

      <div className="bg-bmes-blue-200 absolute bottom-0 left-0 h-2 w-full" />
    </section>
  );
};

export default AboutProgram;
