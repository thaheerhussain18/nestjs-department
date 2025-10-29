import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ConflictException } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}
 
 
  getLoggedInUserData(){
      return {user_id:1,license_id:1};
    }
 
  @Post()
  @UsePipes(new ValidationPipe({  exceptionFactory: (errors) => new ConflictException(errors),whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentService.create(createDepartmentDto,this.getLoggedInUserData());
   
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({  exceptionFactory: (errors) => new ConflictException(errors),whitelist: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentService.update(+id, updateDepartmentDto,this.getLoggedInUserData());
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
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
