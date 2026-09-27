import modelsData from "@/app/data/models.json"
import type {Model} from "@/.next/types/myTypes"
export  async function getAllModels():Promise<Model[]>{
    return modelsData
}
export async function getModelById(id:string|number):Promise<Model>{
    const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
    )

    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }
    return foundModel
}