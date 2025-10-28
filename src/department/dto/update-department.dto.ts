import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { action } from 'generated/department';


export class UpdateDepartmentDto {


  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[A-Za-z0-9][A-Za-z0-9 _\-\.'()&@+]*$/, {
    message:
      'Name must start with a letter or number, and contain only valid characters',
  })
  @ApiProperty()
  name?: string


  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[A-Za-z0-9][A-Za-z0-9'_\-/\\]*$/, {
    message:
      'Code must start with a letter or number and contain only letters, numbers, and the characters \' - _ / \\ with no spaces.',
  })
  @ApiProperty()
  code?: string



  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(3)
  @MaxLength(1024)
  description: string



modified_on: Date;

modified_by_id: number;




}
