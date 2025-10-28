import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, maxLength, MinLength } from "class-validator"

export function Trim() {
  return Transform(({ value }) => (typeof value === 'string' ? value.trim() : value));
}

export class CreateDepartmentDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  
   @Matches(/^[A-Za-z0-9][A-Za-z0-9 _\-\.'()&@+]*$/, {
    message:
      'Name must start with a letter or number, and contain only valid characters',
  })
  @ApiProperty()
  @Trim()
  name:string
  
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[A-Za-z0-9][A-Za-z0-9'_\-/\\]*$/, {
    message:
      'Code must start with a letter or number and contain only letters, numbers, and the characters \' - _ / \\ with no spaces.',
  })
  @ApiProperty()
  @Trim()
  code:string


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(3)
  @MaxLength(1024)
  description:string

  

 
}
