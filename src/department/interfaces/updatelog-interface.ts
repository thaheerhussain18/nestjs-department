import { action } from "generated/department"

export interface UpdateLog{

     name:string
          code: string
          license_id: number
          description: string
          status: boolean
          change_description: string
          action: action
          department_id: number
          created_by_id:number
}