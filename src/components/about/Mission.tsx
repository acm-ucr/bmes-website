import Image from "next/image";
import gear1 from "@/public/mission/gear-1.svg";
import gear2 from "@/public/mission/gear-2.svg";
import gear3 from "@/public/mission/gear-3.svg";

const Mission = () => {
  return (
    <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-white px-4">
      <Image
        src={gear1}
        alt="Decorative gear in the top left corner"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0"
      />
      <Image
        src={gear3}
        alt="Large decorative gear in the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0"
      />
      <Image
        src={gear2}
        alt="Small decorative gear near the bottom right"
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 bottom-0 z-0"
      />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="text-bmes-blue-200 mb-4 text-5xl">
          Mission Statement
        </div>
        <p className="pt-6 text-2xl">
          The Mission of the BMES is to build and support the biomedical
          engineering community, locally, nationally, and internationally, with
          activities designed to communicate recent advances, discoveries, and
          inventions; promote education and professional development; and
          integrate the perspectives of the academic, medical, governmental, and
          business sectors.
        </p>
      </div>
    </div>
  );
};

export default Mission;
