import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  image: StaticImageData;
  subtitle?: string;
}

const Header = ({ title, image, subtitle }: HeaderProps) => {
  return (
    <div className="relative w-screen">
      <div className="relative h-[50vh] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="flex flex-col text-7xl font-light text-white">
            {title}
            <div className="mt-5 text-5xl font-light text-white">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
