import type { CategoryPageProps } from "@/.next/types/myTypes";
import { getCategoryBySlug } from "@/app/lip/categories"
import { getModels } from "@/app/lip/models"
import ModelsGrid from "@/app/components/ModelsGrid"


export default async function CategoryPage({params}:CategoryPageProps){
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    const models = await getModels({ category: categoryName })
    

    return <ModelsGrid title={category.displayName} models={models} />
}

// un known error is thrown when the category is not found, so we can use that to return a 404 page