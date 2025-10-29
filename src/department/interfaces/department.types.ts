import { action } from "generated/department"
import { ResponseDto } from "../dto/responsedto"
export interface logParam{
        department:ResponseDto,
        action:action,
        userdata:userData,
        PreviousData?:ResponseDto
      }

export interface nameAndCodeCheckExistsParamsInterface {
    name?: string;
    code?: string;
    license_id: number;
    department_id?: number;
}


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
export interface userData{
  user_id: number; license_id: number;
}
export interface validateCreateData { name: string, code: string, description: string }

export interface ValidateUpdateData { name?: string, code?: string, description?: string, modified_on: Date, modified_by_id: number }
