import { header_items } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
        <div className="flex items-center justify-between p-4 bg-bmes-blue-100 text-white">
            <Link href={header_items[0].link} className="flex flex-row items-center gap-2">
                <Image src="/BMES_logo.png" alt="BMES Logo" width={40} height={40} />
                <div className="flex flex-col">
                    <span>BIOMEDICAL</span>
                    <span>ENGINEERING</span>
                    <span>SOCIETY</span>
                </div>
            </Link>
            <Link href={header_items[1].link}>
                {header_items[1].name}
            </Link>
            <Link href={header_items[2].link}>
                {header_items[2].name}
            </Link>
            <Link href={header_items[3].link}>
                {header_items[3].name}
            </Link>
            <Link href={header_items[4].link}>
                {header_items[4].name}
            </Link>
            <Link href={header_items[5].link}>
                {header_items[5].name}
            </Link>
            <Link href={header_items[6].link}>
                {header_items[6].name}
            </Link>
        </div>
        </>
    );
}

export default Navbar;