import Image from "next/image";

import gear1 from "@/public/upcoming/gear-1.svg";
import gear2 from "@/public/upcoming/gear-2.svg";
import image from "@/public/upcoming/image.webp";

import EventCard from "@/components/events/EventCard";
import events from "@/data/events";

const Upcoming = () => {
  return (
    <div className="relative flex h-[60vh] w-full items-center justify-start overflow-hidden bg-white px-4">
      <Image
        src={gear1}
        alt="Gear at the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0"
      />
      <Image
        src={gear2}
        alt="Gear at the bottom edge"
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 z-0"
      />
      <Image
        src={image}
        alt="Portrait of BMES group at the San Diego convention center"
        aria-hidden="true"
        className="middle pointer-events-none absolute right-1/16 z-0"
      />
      <div className="relative left-[5vw] z-10 w-1/2">
        <div className="text-bmes-blue-200 mb-10 text-5xl">Upcoming Events</div>
        <ul className="text-bmes-blue-300 relative left-[5vw] list-disc space-y-5 pl-5 text-4xl">
          {events.map((event, index) => (
            <li key={index}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Upcoming;
