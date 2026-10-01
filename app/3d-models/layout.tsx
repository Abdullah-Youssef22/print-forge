"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {getAllCategories} from "@/app/lip/categories"
import type { ReactNode } from "react"
import type { Category } from "@/app/types"
import CatNav from "@/app/components/CatNavBar"

export default function ModelsLayout({children} : {children: ReactNode}){
    return (
        <div className="flex">
            <CatNav />
            {children}
        </div>
    )
}