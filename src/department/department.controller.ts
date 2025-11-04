import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ConflictException, Query } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { GlobalFindAll } from './interfaces/department.types';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}
 
 
  getLoggedInUserData(){
      return {user_id:1,license_id:1};
    }
 
  @Post()
  @UsePipes(new ValidationPipe({ exceptionFactory: (errors) => new ConflictException(errors), whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentService.create(createDepartmentDto,this.getLoggedInUserData());
   
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({  exceptionFactory: (errors) => new ConflictException(errors),whitelist: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentService.update(+id, updateDepartmentDto,this.getLoggedInUserData());
  }

  @Get()
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({name:'name',required:false})
  @ApiQuery({name:'code',required:false})
  @ApiQuery({name:'description',required:false})
  @ApiQuery({name:'offset',required:false})
  // @ApiBody({ })
  // @ApiTags('Department Find All')
  async findAll(@Query('offset') offset,@Query('search')  search?: string,@Query('status') status?:string,@Query('limit') limit?:string,@Query('name') name?,@Query('code') code?,@Query('description') description?) {
    
    const limitNumber = limit !== undefined ? Number(limit) : undefined;
    return await this.departmentService.departmentFindAll(this.getLoggedInUserData(),search, status, limitNumber, offset, name, code, description,);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.getDepartmentByID(+id);
  }

  
  @Patch('deactivate:id')
  deactive(@Param('id') id: string) {
    return this.departmentService.deactivate(+id);
  }
}
