import Link from "next/link";
import gear404TopLeft from "@/public/gears/404TopGear.svg";
import gear404BottomCenter from "@/public/gears/404BottomGear.svg";
import gear404BottomRight from "@/public/gears/404RightGear.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[87vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={gear404TopLeft}
        alt=""
        className="absolute top-5 left-0 -z-10"
      />
      <Image
        src={gear404BottomCenter}
        alt=""
        className="absolute bottom-0 left-2/3 -z-10 -translate-x-1/2 translate-y-1/2"
      />
      <Image
        src={gear404BottomRight}
        alt=""
        className="absolute right-0 bottom-5 -z-10"
      />

      <div className="flex flex-col items-center text-center">
        <p className="text-bmes-blue-200 mb-2 text-9xl font-bold">404</p>
        <p className="mb-6 text-3xl font-light">Page Not Found</p>
        <Link
          href="/"
          className="bg-bmes-blue-300 rounded-2xl px-4 py-2 text-white shadow-lg transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
