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
    <section className="relative bg-bmes-gray-200 flex flex-col items-center px-8 py-20 text-center overflow-hidden">


{/* The three background gears */}

<img
  src="/gear.svg"
  alt=""
  className="absolute -left-65 -bottom-35 w-[550px] opacity-20 z-0 pointer-events-none"
/>
<img
  src="/gear.svg"
  alt=""
  className="absolute -right-25 -top-6 w-[300px] opacity-20 z-0 pointer-events-none"
/>
<img
  src="/gear.svg"
  alt=""
  className="absolute -right-16 bottom-0 w-[390px] opacity-20 z-0 pointer-events-none"
/>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-bmes-blue-200 mb-6 z-10">
        {title}
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-lg leading-8 text-black z-10">
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
      <p className="mt-6 text-lg z-10">{subtext}</p>

      {/* Button */}
      <Link
  href={buttonHref}
  className="mt-4 rounded-xl bg-bmes-blue-300 px-10 py-4 text-2xl font-bold text-white shadow-md hover:scale-105 transition z-10 underline"
>
  {buttonText}
</Link>

      {/* Contact INfo*/}
      <p className="mt-8 text-lg z-10">
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
      <div className="absolute bottom-0 left-0 w-full h-2 bg-bmes-blue-200" />
    </section>
  );
};

export default AboutProgram;