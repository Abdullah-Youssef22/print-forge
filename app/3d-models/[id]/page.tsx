import type { ModelDetailPageProps } from "@/.next/types/myTypes"
import { getModelById } from "@/app/lip/models"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  const { id } = await params
  const model = await getModelById(id)
  console.log(model)
  return <h1>The id of this model is {id}</h1>
}