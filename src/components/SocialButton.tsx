import Link from "next/link";

interface SocialButtonProps {
    link: string;
    icon: React.ComponentType
}

const SocialButton = ({ link, icon: Icon }: SocialButtonProps) => {
    return (
        <Link href={link} target="_blank" className="flex items-center justify-center w-18 h-18 bg-bmes-blue-300 p-3 text-white text-5xl rounded-full shadow-lg">
            <Icon />
        </Link>

    );
}
export default SocialButton;