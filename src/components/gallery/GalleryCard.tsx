"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  image: StaticImageData;
  alt: string;
}

const ImageCard = ({ image, alt }: ImageCardProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0.1, scale: 0.8 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative h-full min-h-56 w-full overflow-hidden rounded-3xl"
    >
      <Image
        src={image}
        alt={alt}
        className="h-full w-full rounded-3xl object-cover"
      />
    </motion.div>
  );
};

export default ImageCard;
