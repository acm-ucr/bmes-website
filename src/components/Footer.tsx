"use client";
import Link from "next/link";
import { footerIcons } from "@/data/footer";
import Logo from "@/public/bmes-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-bmes-blue-200 flex w-full items-end justify-between py-3">
      <div className="flex items-end gap-4">
        <Image src={Logo} alt="BMES Logo" className="pl-5" />

        <div className="text-bmes-gray-200 text-lg leading-tight">
          <div>BIOMEDICAL</div>
          <div>ENGINEERING</div>
          <div>SOCIETY</div>
        </div>
      </div>

      <div
        aria-label="footer links"
        className="flex items-center gap-4 pt-30 pr-5"
      >
        {footerIcons.map(({ href, name, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            aria-label={name}
            target="_blank"
            className="text-bmes-gray-200 flex items-center justify-center text-3xl"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;
