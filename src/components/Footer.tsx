"use client";

import Link from "next/link";
import Image from "next/image";
import { footerIcons } from "@/data/footer";
import Logo from "@/public/bmes-logo.svg";

const Footer = () => {
  return (
    <div className="bg-bmes-blue-200 flex w-full flex-col px-6 py-4 md:flex-row md:items-end md:justify-between md:gap-6">
      <div className="flex items-end gap-4">
        <Image src={Logo} alt="BMES Logo" className="w-14 md:w-16" />

        <div className="text-bmes-gray-200 text-lg leading-tight md:text-xl">
          <div>BIOMEDICAL</div>
          <div>ENGINEERING</div>
          <div>SOCIETY</div>
        </div>
      </div>

      <div
        aria-label="footer links"
        className="flex items-center gap-4 pt-10 md:justify-end"
      >
        {footerIcons.map(({ href, name, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            aria-label={name}
            target="_blank"
            className="text-bmes-gray-200 text-4xl md:text-3xl"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
