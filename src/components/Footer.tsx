"use client";
import Link from "next/link";
import { footerIcons } from "@/data/footer";
import Logo from "@/public/bmes_website_logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-bmes-blue-200 flex w-full py-2">
      <div className="flex w-full items-center justify-between px-2">
        <Image src={Logo} alt="BMES Logo" className="h-40 w-60 pt-20" />
      </div>
      <div aria-label="footer links" className="flex gap-4 pt-30 pr-5">
        {footerIcons.map((icon) => {
          const Icon = icon.icon;
          return (
            <Link
              key={icon.name}
              href={icon.href}
              aria-label={icon.name}
              target="_blank"
              className="flex items-center gap-2"
            >
              <Icon className="text-bmes-gray-200 h-8 w-8"></Icon>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
