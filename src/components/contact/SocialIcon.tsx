import React from "react"; 
import Link from "next/link";

interface SocialIconProps { 
    icon: React.ComponentType; 
    url: string; 
}

const SocialIcon = ({ icon, url }: SocialIconProps) => { 
    const Icon = icon;
    return (
        <Link href={url} target="_blank" className="bg-bmes-blue-300 h-18 w-18 rounded-full p-3 text-5xl text-white shadow-lg">
            <Icon />
        </Link>
    ); 
}; 

export default SocialIcon;