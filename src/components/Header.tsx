"use client"
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  title: string;
  image: StaticImageData;
  subtitle?: string;
}

const Header = ({ title, image, subtitle }: HeaderProps) => {
  const page = usePathname();
  return (
    <div className="relative bg-white pointer-events-none">
      <Image src={image} alt={title} />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="flex flex-col text-7xl font-light text-white w-2/3">
          {title}
          <div className={`mt-5 text-5xl font-light text-white ${page === "/mentorship" ? "underline italic" : ""}`}>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
