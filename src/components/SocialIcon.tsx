import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconProps {
  icon: IconType;
  href: string;
}

const SocialIcon = ({ icon: Icon, href }: SocialIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="bg-bmes-blue-300 flex items-center justify-center rounded-full p-3 text-6xl text-white shadow-lg md:p-5 md:text-7xl"
    >
      <Icon />
    </Link>
  );
};

export default SocialIcon;
