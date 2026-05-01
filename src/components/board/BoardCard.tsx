import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import MailButton from "./MailButton";

interface BoardCardProps {
  name: string;
  title: string;
  image: string;
  email: string;
  about: string;
}

const BoardCard = ({ name, title, image, email }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={image} alt={name} className="rounded-full object-cover" />

      <div className="mt-3 flex h-10 items-center text-xl font-semibold text-black">
        {name}
      </div>

      <div className="flex h-10 items-center text-base tracking-wide text-gray-400 uppercase">
        {title}
      </div>

      <Link
        href={`/board/${name.toLowerCase().split(" ")[0]}`}
        className="mt-2 rounded-md border border-blue-400 px-5 py-2 text-sm text-blue-500 uppercase"
      >
        About Me
      </Link>

      <div className="mt-2">
        <MailButton email={email} name={name} icon={MdOutlineMail} />
      </div>
    </div>
  );
};

export default BoardCard;