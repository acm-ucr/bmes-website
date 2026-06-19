"use client";

import Image from "next/image";
import { motion } from "motion/react";

import BigBottomRightGear from "@/public/upcoming/big-bottom-right-gear.svg";
import BigBottomGear from "@/public/upcoming/big-bottom-gear.svg";
import SmallRightGear from "@/public/upcoming/small-right-gear.svg";
import SmallBottomRightGear from "@/public/upcoming/small-bottom-right-gear.svg";
import GroupConvention from "@/public/upcoming/groupConvention.webp";

import EventCard from "@/components/events/EventCard";
import events from "@/data/events";

const eventAnimation = {
  initial: { x: 20, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const Upcoming = () => {
  return (
    <div className="relative overflow-hidden py-8 lg:h-[65vh]">
      <div className="flex h-full flex-col items-center justify-around md:gap-6 lg:w-5/6 lg:flex-row lg:place-self-center">
        <div className="text-bmes-blue-200 text-5xl">
          <motion.div {...eventAnimation}>Upcoming Events</motion.div>
          <ul className="text-bmes-blue-300 mt-8 list-disc pl-8 text-lg md:text-xl">
            {events.map((event, index) => (
              <motion.li
                {...eventAnimation}
                transition={{ delay: (index + 2) * 0.2 }}
                key={index}
              >
                <EventCard {...event} />
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div {...eventAnimation} transition={{ delay: 0.2 }}>
          <Image
            src={GroupConvention}
            alt="Portrait of BMES group at the San Diego convention center"
            className="p-8 lg:p-0"
          />
        </motion.div>
      </div>

      <Image
        src={BigBottomRightGear}
        alt="Decorative gear at the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 -z-10 hidden md:block"
      />
      <Image
        src={BigBottomGear}
        alt="Decorative gear at the bottom edge"
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 bottom-0 -z-10 hidden md:block lg:right-1/4"
      />
      <Image
        src={SmallRightGear}
        alt="Decorative small gear at the right edge"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -z-10 block md:hidden"
      />
      <Image
        src={SmallBottomRightGear}
        alt="Decorative small gear at the bottom right corner"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 -z-10 block md:hidden"
      />
    </div>
  );
};

export default Upcoming;
