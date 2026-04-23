"use client";

import { navigations } from "@/data/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BMES_logo from "@/public/BMES_logo.svg";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
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

        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-12 w-12" />
          ) : (
            <Menu className="h-12 w-12" />
          )}
        </div>

        <div className="hidden items-center gap-8 pr-10 text-lg lg:flex">
          {navigations.map(({ link, name }, index) => (
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

      {isOpen && (
        <div className="bg-bmes-blue-100 flex flex-col items-center gap-6 px-6 pb-6 text-2xl text-white lg:hidden">
          {navigations.map(({ link, name }, index) => (
            <Link
              key={index}
              href={link}
              onClick={() => setIsOpen(false)}
              className={`${
                pathName === link
                  ? "text-bmes-blue-200 flex h-16 w-screen items-center justify-center bg-white"
                  : "no-underline"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-bmes-blue-300 rounded-2xl px-4 py-2"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
