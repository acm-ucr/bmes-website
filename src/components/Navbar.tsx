import { header_items } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
        <div className="flex items-center justify-between p-4">
            <Link href={header_items[0].link}>
                {header_items[0].name}
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