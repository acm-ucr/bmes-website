import Link from "next/link";
import gear_1 from "@/public/404-gears/gear-1.svg"
import gear_2 from "@/public/404-gears/gear-2.svg"
import gear_3 from "@/public/404-gears/gear-3.svg"
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[87vh]">
        <Image src={gear_1} alt="gear" className="absolute z-0 top-0 left-0"/>
        <Image src={gear_2} alt="gear" className="absolute z-0 bottom-0 right-107"/>
        <Image src={gear_3} alt="gear" className="absolute z-0 bottom-0 right-0"/>
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-9xl font-bold text-bmes-blue-200 mb-2">404</p>
          <h1 className="text-3xl font-light mb-2">Page Not Found</h1>
          <Link
                href="/"
                className="bg-bmes-blue-300 rounded-2xl px-4 py-2 text-white shadow-lg"
          >
            Return Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
