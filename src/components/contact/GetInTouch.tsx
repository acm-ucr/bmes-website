import Link from "next/link";
import Image from "next/image";
import GetInTouchImg from "@/public/getInTouch.webp";

export default function GetInTouch() {
  return (
    <div className="flex flex-row items-center gap-8 rounded-2xl bg-white p-8">
      <div className="flex flex-col gap-4">
        <div className="text-bmes-blue-100 text-5xl">Get in Touch!</div>
        <div className="text-black">
          Whether you are a first year interested in meeting new people or a
          third year looking into internships and learning opportunities, the
          Biomedical Engineering Society is the place for you!
        </div>
        <div className="text-black">
          FOR MEMBERSHIP REQUESTS, please visit and join at{" "}
          <Link
            href="https://highlander.ucr.edu"
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
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}
