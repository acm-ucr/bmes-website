import Image from "next/image";

import BigBottomRightGear from "@/public/upcoming/big-bottom-right-gear.svg";
import BigBottomGear from "@/public/upcoming/big-bottom-gear.svg";
import SmallRightGear from "@/public/upcoming/small-right-gear.svg";
import SmallBottomRightGear from "@/public/upcoming/small-bottom-right-gear.svg";
import image from "@/public/upcoming/image.webp";

import EventCard from "@/components/events/EventCard";
import events from "@/data/events";

const Upcoming = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="relative z-10 w-full lg:w-1/2">
          <div className="text-bmes-blue-200 mb-8 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Upcoming Events
          </div>
          <ul className="text-bmes-blue-300 list-disc space-y-6 pl-5 text-base sm:text-lg md:text-xl">
            {events.map((event, index) => (
              <li key={index}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 w-full lg:w-1/2">
          <div className="relative mx-auto h-[260px] max-w-xl overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[500px]">
            <Image
              src={image}
              alt="Portrait of BMES group at the San Diego convention center"
              aria-hidden="true"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <Image
        src={BigBottomRightGear}
        alt="Decorative gear at the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 hidden md:block"
      />
      <Image
        src={BigBottomGear}
        alt="Decorative gear at the bottom edge"
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 z-0 hidden md:block"
      />
      <Image
        src={SmallRightGear}
        alt="Decorative small gear at the right edge"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 z-0 block md:hidden"
      />
      <Image
        src={SmallBottomRightGear}
        alt="Decorative small gear at the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 block md:hidden"
      />
    </section>
  );
};

export default Upcoming;
