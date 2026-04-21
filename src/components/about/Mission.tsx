// src/components/about/Mission.tsx
// Called in: src/app/about/page.tsx

import Image from "next/image";

const Mission = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16">
      {/* Top-left gear */}
      <Image
        src="/gear1/Vector1.svg"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        className="pointer-events-none absolute -top-6 -left-6 z-0 select-none"
      />

      {/* Bottom-right large gear */}
      <Image
        src="/gear2/Vector2.svg"
        alt=""
        aria-hidden="true"
        width={224}
        height={224}
        className="pointer-events-none absolute -right-6 -bottom-6 z-0 select-none"
      />

      {/* Bottom-right small gear */}
      <Image
        src="/gear3/Vector3.svg"
        alt=""
        aria-hidden="true"
        width={112}
        height={112}
        className="pointer-events-none absolute right-32 bottom-4 z-0 select-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-2xl font-semibold tracking-wide text-[#2E5FA3]">
          Mission Statement
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">
          The Mission of the BMES is to build and support the biomedical
          engineering community, locally, nationally, and internationally, with
          activities designed to communicate recent advances, discoveries, and
          inventions; promote education and professional development; and
          integrate the perspectives of the academic, medical, governmental, and
          business sectors.
        </p>
      </div>
    </section>
  );
};

export default Mission;
