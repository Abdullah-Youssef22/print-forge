import categories from "../data/categories.json"
import { Category } from "@/.next/types/myTypes"
import { notFound } from 'next/navigation'

export function getAllCategories(): Category[] {
    return categories
}

export function getCategoryBySlug(slug: string): Category {
    const category = categories.find((c: Category) => c.slug === slug)

    if (!category) {
        notFound()
    }

    return category
}

export function getDisplayNameFromSlug(slug: string): string {
    const category = getCategoryBySlug(slug)
    return category.displayName
}
