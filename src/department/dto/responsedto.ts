import { Exclude, Expose } from "class-transformer"

export class ResponseDto {
    id: number
    name: string
    description: string
    code: string
    status: boolean
    license_id: number
    created_on: Date | null
    modified_on?: Date | null
    created_by_id: number
    modified_by_id?: number | null
    
    modified_by_username?: string

    @Exclude()
    created_by: {first_name:string ,
        last_name:string
    }
    created_by_username?:string
    // @Expose()
    // getfullname?() {
    //     return `${this.created_by.first_name} ${this.created_by.last_name}`;
    // }

    constructor(partial: Partial<ResponseDto>) {
    Object.assign(this, partial);
  }
}

