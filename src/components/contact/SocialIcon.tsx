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
      className="bg-bmes-blue-300 rounded-full p-5 text-7xl text-white shadow-lg"
    >
      <Icon />
    </Link>
  );
};

export default SocialIcon;
