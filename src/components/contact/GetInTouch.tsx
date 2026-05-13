import Link from "next/link";
import Image from "next/image";
import GetInTouchImg from "@/public/getInTouch.webp";

const GetInTouch = () => {
  return (
    <div className="mx-auto flex w-11/12 max-w-7xl flex-col items-center justify-center gap-8 rounded-2xl bg-white p-6 sm:p-8 md:p-10 lg:flex-row lg:gap-12">
      <div className="flex w-full flex-col gap-4 text-center lg:w-1/2 lg:text-left">
        <div className="text-bmes-blue-100 text-3xl sm:text-4xl md:text-5xl">
          Get in Touch!
        </div>

        <div className="text-sm leading-relaxed sm:text-base md:text-lg">
          Whether you are a first year interested in meeting new people or a
          third year looking into internships and learning opportunities, the
          Biomedical Engineering Society is the place for you!
        </div>

        <div className="text-sm leading-relaxed sm:text-base md:text-lg">
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

      <div className="flex w-full justify-center lg:w-1/2">
        <Image
          src={GetInTouchImg}
          alt="Get in Touch"
          className="h-auto w-full max-w-xl rounded-xl object-cover shadow-lg"
          sizes="(max-width: 1024px) 90vw, 45vw"
        />
      </div>
    </div>
  );
};

export default GetInTouch;