"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {getAllCategories} from "@/app/lip/categories"
import type { ReactNode } from "react"
import type { Category } from "@/app/types"

export default function ModelsLayout({children} : {children: ReactNode}){
    const categories:Category[]= getAllCategories()
    console.log(categories)
    
    return (
        <div className="flex">
            <nav className="sticky top-0 h-screen overflow-y-auto  flex flex-col gap-[15px] justify-center   ">
                <Link href="/3d-models">All</Link>
                {
                    categories.map(cat=>(
                        <Link 
                            href={`/3d-models/Categories/${cat.slug}`}
                            key={cat.slug}>
                            {cat.displayName}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </div>
    )
}