import { navigations } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import BMES_logo from "@/public/BMES_logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="bg-bmes-blue-100 flex items-center justify-between px-6 py-4 text-white">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={BMES_logo} alt="BMES Logo" />
            <div className="flex flex-col">
              <span>BIOMEDICAL</span>
              <span>ENGINEERING</span>
              <span>SOCIETY</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-8 pr-10 text-lg">
          {navigations.slice(1, 6).map(({ link, name }, index) => (
            <Link key={index} href={link}>
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-bmes-blue-300 rounded-2xl px-4 py-2"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
