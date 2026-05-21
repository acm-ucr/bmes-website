import Link from "next/link";

interface SocialButtonProps {
  link: string;
  icon: React.ComponentType;
}

const SocialButton = ({ link, icon: Icon }: SocialButtonProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-bmes-blue-300 flex h-18 w-18 items-center justify-center rounded-full p-3 text-5xl text-white shadow-lg"
    >
      <Icon />
    </Link>
  );
};
export default SocialButton;
