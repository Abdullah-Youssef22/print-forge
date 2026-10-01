
import Link from "next/link"
import { getModels } from "@/app/lip/models"
import type { Model,GetModelsParams } from "@/.next/types/myTypes"
import ModelsGrid from "@/app/components/ModelsGrid"

export default async function Page() {
    const models = await getModels()
    return <ModelsGrid title="3D Models" models={models} />
}
