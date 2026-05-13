import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  image: StaticImageData;
  alt: string;
}

const ImageCard = ({ image, alt }: ImageCardProps) => {
  return (
    <div className="relative h-full min-h-56 w-full overflow-hidden rounded-3xl">
      <Image
        src={image}
        alt={alt}
        className="h-full w-full rounded-3xl object-cover"
      />
    </div>
  );
};

export default ImageCard;
