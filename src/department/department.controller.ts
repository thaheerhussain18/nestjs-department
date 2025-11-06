import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ConflictException, Query, Res, HttpStatus } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { GlobalFindAll } from './interfaces/department.types';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllDepartment } from './dto/get-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}
 
 
  getLoggedInUserData(){
      return {user_id:2,license_id:1};
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

  @UsePipes(new ValidationPipe({  exceptionFactory: (errors) => new ConflictException(errors),whitelist: true, forbidNonWhitelisted: true }))
  @Get()
  // @ApiQuery({ name: 'search', required: false })
  // @ApiQuery({ name: 'status', required: false })
  // @ApiQuery({ name: 'limit', required: false })
  // @ApiQuery({name:'name',required:false})
  // @ApiQuery({name:'code',required:false})
  // @ApiQuery({name:'description',required:false})
  // @ApiQuery({name:'offset',required:false})
  // @ApiBody({ })
  // @ApiTags('Department Find All')
  // @ApiQuery({ type: GetAllDepartment })
  async findAll(@Query() paginationQuery?: GetAllDepartment) {
    // console.log(paginationQuery)
    return await this.departmentService.departmentFindAll(this.getLoggedInUserData(),paginationQuery);
  }

  @Get('logs/')
  async findLogAll(@Query() paginationQuery?: GetAllDepartment) {
    // console.log(paginationQuery)
    return await this.departmentService.departmentLogFindAll(this.getLoggedInUserData(),paginationQuery);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.getDepartmentByID(+id,this.getLoggedInUserData());
  }

  
  @Patch('deactivate/:id')
  deactive(@Param('id') id: string) {
    console.log(+id)
    return this.departmentService.deactivate(+id,this.getLoggedInUserData());
  }
  @Patch('activate/:id')
  activate(@Param('id') id: string) {
    console.log(+id)
    return this.departmentService.activate(+id,this.getLoggedInUserData());
  }

 
@Get('downloadDepartment')
    @ApiResponse({ status: 200, description: 'PDF file generated successfully',content: { 'application/pdf': { schema: { type: 'string', format: 'binary' } } }, })
    async getDownloadData(
      @Query() generatePdfDto:GeneratePdfDto,
      @Res() res:Response,)
      {
        const loggedInUserDataValues = this.getLoggedInUserData();
        const {data,requestedColumns} = await this.departmentService.getAllDepartments({generatePdfDto,loggedInUserDataValues,})
        const pdfBuffer=await this.departmentService.generateTablePDF(data,'department',requestedColumns)
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Department"');
    res.end(pdfBuffer);
    }

}
