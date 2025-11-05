import {  ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional, IsString } from "class-validator"


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

 }