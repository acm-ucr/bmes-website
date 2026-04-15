import Link from "next/link";
import gear_1 from "@/public/404-gears/gear-1.svg";
import gear_2 from "@/public/404-gears/gear-2.svg";
import gear_3 from "@/public/404-gears/gear-3.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="relative flex min-h-[87vh] flex-col items-center justify-center">
        <Image src={gear_1} alt="gear" className="absolute top-0 left-0 z-0" />
        <Image
          src={gear_2}
          alt="gear"
          className="absolute right-107 bottom-0 z-0"
        />
        <Image
          src={gear_3}
          alt="gear"
          className="absolute right-0 bottom-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-bmes-blue-200 mb-2 text-9xl font-bold">404</p>
          <h1 className="mb-2 text-3xl font-light">Page Not Found</h1>
          <Link
            href="/"
            className="bg-bmes-blue-300 rounded-2xl px-4 py-2 text-white shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
