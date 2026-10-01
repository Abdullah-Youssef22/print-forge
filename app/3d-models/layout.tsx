"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {getAllCategories} from "@/app/lip/categories"
import type { ReactNode } from "react"
import type { Category } from "@/app/types"
import CatNav from "@/app/components/CatNavBar"

export default function ModelsLayout({ children }: { children: ReactNode }) {

  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CatNav />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}