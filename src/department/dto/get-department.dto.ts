import {  ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsInt, IsOptional, IsString } from "class-validator"
import { page, SORT_COLUMN, sortingsAllowed } from "../interfaces/department.types"


export class GetAllDepartment {
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    search?: string
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    status?: string
    @ApiProperty({required:false})
    @IsOptional()
    @IsInt()
    limit?: number
    @ApiProperty({required:false})
    @IsOptional()
    @IsInt()
    offset?: number
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    name?: string  
    @ApiProperty({required:false})
    @IsString()
    @IsOptional()
    code?: string
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    description?: string    

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    change_description?: string    

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    sort_by?:string

    @ApiProperty({ required: false, type: String,
    enum: Object.values(SORT_COLUMN), })
    @IsOptional()
    @IsEnum(SORT_COLUMN)
    order:SORT_COLUMN

     // ✅ ADD THESE for your log table:
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  action?: string;


  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  created_by?: string;
   
 }