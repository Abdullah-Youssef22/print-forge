"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {getAllCategories} from "@/app/lip/categories"
import type { ReactNode } from "react"
import type { Category } from "@/app/types"

export default function CatNav(){
    const pathname = usePathname();
    const categories:Category[]= getAllCategories()
    const links = [
        { href: "/3d-models", label: "All" },
        ...categories.map(cat => ({
            href: `/3d-models/Categories/${cat.slug}`,
            label: cat.displayName,
            slug: cat.slug,
        })),
    ];

    return(
        <nav className={`
            sticky top-0 h-screen overflow-y-auto
            flex flex-col gap-[15px] justify-center
            `}>

                
                {links.map(link => {
                    const isActive = pathname === link.href;
                    return(
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                isActive
                                    ? "text-orange-500 border-orange-500"
                                    : "text-gray-700 border-transparent hover:text-orange-500"
                            }
                        >
                            {link.label}
                        </Link>
                    )
                })}
        </nav>
    )
}
