import type { CategoryPageProps } from "@/next/types/myTypes";
export default async function CategoryPage({prams}:){
    const {categoryName} = await params
    return <h1>{categoryName}</h1>
}