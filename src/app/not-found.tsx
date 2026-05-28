import Link from "next/link";
import gear404TopLeftLarge from "@/public/404-gears/404TopGearLarge.svg";
import gear404BottomCenterLarge from "@/public/404-gears/404BottomGearLarge.svg";
import gear404BottomRightLarge from "@/public/404-gears/404RightGearLarge.svg";
import gear404TopLeftSmall from "@/public/404-gears/404TopGearSmall.svg";
import gear404BottomCenterSmall from "@/public/404-gears/404BottomGearSmall.svg";
import gear404BottomRightSmall from "@/public/404-gears/404RightGearSmall.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[87vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src={gear404TopLeftSmall}
        alt="Decorative gear"
        className="absolute -top-5 -left-5 -z-10 p-4 md:hidden"
      />
      <Image
        src={gear404TopLeftLarge}
        alt="Decorative gear"
        className="absolute -top-6 -left-5 -z-10 hidden p-6 md:block"
      />

      <Image
        src={gear404BottomCenterSmall}
        alt="Decorative gear"
        className="absolute bottom-0 left-2/3 -z-10 -translate-x-1/2 translate-y-1/2 p-4 md:hidden"
      />
      <Image
        src={gear404BottomCenterLarge}
        alt="Decorative gear"
        className="absolute bottom-0 left-1/4 -z-10 hidden -translate-x-1/2 translate-y-1/2 p-6 md:block"
      />

      <Image
        src={gear404BottomRightSmall}
        alt="Decorative gear"
        className="absolute -right-5 bottom-5 -z-10 p-4 md:hidden"
      />
      <Image
        src={gear404BottomRightLarge}
        alt="Decorative gear"
        className="absolute -right-5 -bottom-5 -z-10 hidden p-6 md:block"
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
