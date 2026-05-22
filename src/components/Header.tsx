"use client";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  title: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  subtitle?: string;
}

const Header = ({ title, image, mobileImage, subtitle }: HeaderProps) => {
  const page = usePathname();
  return (
    <div className="pointer-events-none relative bg-white">
      <Image src={image} alt={title} className="hidden w-full md:block" />
      <Image
        src={mobileImage || image}
        alt={title}
        className="block w-full md:hidden"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="sm:text-10xl flex w-2/3 flex-col text-center text-7xl leading-tight font-light text-white">
          {title}
          <div
            className={`mt-5 text-5xl font-light text-white ${page === "/mentorship" ? "italic underline" : ""}`}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
