"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function Header(){
    const pathname = usePathname();
    return(

        <header className="flex justify-between" >
            <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={120} 
            height={50} 
            />
            <nav className="flex gap-4 ">
                    {navLinks.map((link)=>{
                        const isActive = pathname === link.href;
                        return(
                            <Link
                            key={link.href}
                            href={link.href}
                            className={`pb-1 border-b-2 transition-colors ${
                                isActive
                                    ? "text-orange-500 border-orange-500"
                                    : "text-gray-700 border-transparent hover:text-orange-500"
                            }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
            </nav>
        </header>
    )
}