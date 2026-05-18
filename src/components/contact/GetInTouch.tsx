import Link from "next/link";
import Image from "next/image";
import GetInTouchImg from "@/public/getInTouch.webp";

const GetInTouch = () => {
  return (
    <div className="flex w-11/12 flex-col items-center justify-center gap-8 place-self-center rounded-2xl bg-white p-6 sm:p-8 md:flex-row md:gap-12 md:p-10">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="text-bmes-blue-100 py-4 text-3xl md:py-8 md:text-4xl lg:text-5xl">
          Get in Touch!
        </div>

        <div>
          Whether you are a first year interested in meeting new people or a
          third year looking into internships and learning opportunities, the
          Biomedical Engineering Society is the place for you!
        </div>

        <div>
          FOR MEMBERSHIP REQUESTS, please visit and join at{" "}
          <Link
            href="https://highlander.ucr.edu/organization/bmes"
            className="text-bmes-blue-300 underline hover:opacity-80"
          >
            HighlanderLink
          </Link>{" "}
          and you will be added to our membership roster and mailing list!
        </div>
      </div>

      <Image
        src={GetInTouchImg}
        alt="Get in Touch"
        className="w-full rounded-xl shadow-lg md:w-1/2"
      />
    </div>
  );
};

export default GetInTouch;
