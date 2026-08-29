"use client";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import defaultMobile from "@/public/mobileHeaders/mobileHeader.webp";

interface HeaderProps {
  title: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  subtitle?: string;
}

const Header = ({ title, image, mobileImage, subtitle }: HeaderProps) => {
  const page = usePathname();

  return (
    <div className="pointer-events-none relative">
      <Image src={image} alt={title} className="hidden w-full md:block" />
      <Image
        src={mobileImage || defaultMobile}
        alt={title}
        className="block w-full md:hidden"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div
          className={`lg:text-10xl flex flex-col place-self-center text-center leading-tight font-light text-white md:text-6xl ${page === "/" ? "text-4xl md:w-2/3" : "text-5xl"}`}
        >
          {title}
          <div
            className={`mt-5 font-light text-white ${page === "/mentorship" ? "mt-2 text-3xl italic underline" : "text-5xl"}`}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
