import Link from "next/link";

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
    <section className="bg-bmes-gray-200 relative flex flex-col items-center overflow-hidden px-8 py-20 text-center">
      {/* The three background gears */}

      <img
        src="/gear.svg"
        alt=""
        className="pointer-events-none absolute -bottom-35 -left-65 z-0 w-[550px] opacity-20"
      />
      <img
        src="/gear.svg"
        alt=""
        className="pointer-events-none absolute -top-6 -right-25 z-0 w-[300px] opacity-20"
      />
      <img
        src="/gear.svg"
        alt=""
        className="pointer-events-none absolute -right-16 bottom-0 z-0 w-[390px] opacity-20"
      />

      {/* Title */}
      <h1 className="text-bmes-blue-200 z-10 mb-6 text-4xl font-semibold">
        {title}
      </h1>

      {/* Description */}
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

      {/* Subtext */}
      <p className="z-10 mt-6 text-lg">{subtext}</p>

      {/* Button */}
      <Link
        href={buttonHref}
        className="bg-bmes-blue-300 z-10 mt-4 rounded-xl px-10 py-4 text-2xl font-bold text-white underline shadow-md transition hover:scale-105"
      >
        {buttonText}
      </Link>

      {/* Contact INfo*/}
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

      {/* Bottom blue bar */}
      <div className="bg-bmes-blue-200 absolute bottom-0 left-0 h-2 w-full" />
    </section>
  );
};

export default AboutProgram;
