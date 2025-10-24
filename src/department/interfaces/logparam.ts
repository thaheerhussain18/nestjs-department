import { action } from "generated/department"
import { ResponseDto } from "../dto/responsedto"
import { userData } from "./userdata.interface"

export interface logParam{
        department:ResponseDto,
        action:action,
        userdata:userData

      }