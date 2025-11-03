import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prismaservice';
import { GlobalFindAll, userData } from './interfaces/department.types';
import { ResponseDto } from './dto/responsedto';
import { action, m_master_department, Prisma } from '../../generated/department';
import { logParam } from './interfaces/department.types';
import { DepartmentServiceRelatedFunctions } from './utility/department-service-utilities';
import { ValidateUpdateData } from './interfaces/department.types';

import { nameAndCodeCheckExistsParamsInterface } from './interfaces/department.types';
import { validateCreateData } from './interfaces/department.types';
import { stat } from 'fs';

@Injectable()
export class DepartmentService {
  constructor(private prismaService: PrismaService,

    private serviceRelatedFunctions: DepartmentServiceRelatedFunctions
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto, userdata: userData) {
    try {
      let { name, code, description } = createDepartmentDto;

      if (!name && !code && !description) throw new ConflictException("Nothing to update");
      const createdata: validateCreateData = this.serviceRelatedFunctions.validateCreateData({ name, code, description });
      // console.log('post method');      
      await this.serviceRelatedFunctions.existingUserCheck(userdata)
      const nameAndCodeCheckExistsParams: nameAndCodeCheckExistsParamsInterface = { name: name, code: code, license_id: userdata.license_id };
      await this.serviceRelatedFunctions.nameAndCodeCheckExits(nameAndCodeCheckExistsParams)


      const department = await this.prismaService.m_master_department.create({
        data: {
          ...createdata,
          license_id: userdata.license_id,
          status: true,
          created_by_id: userdata.user_id,
        },
        include: {
          created_by: {
            select: {
              first_name: true,
              last_name: true
            }
          }
        }

      });
      const logParameter: logParam = {
        department: department,
        action: action.Created,
        userdata: userdata
      }
      await this.serviceRelatedFunctions.logFunction(logParameter)
      return new ResponseDto(department)

    }
    catch (error) {
      console.log(error.message);
      throw error

    }
  }

  async getDepartmentByID(id: number) {
    if (!id) throw new ConflictException('Department ID is required');

    return (await this.prismaService.m_master_department.findFirst({ where: { id } }))
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto, userdata: userData) {
    try {

      await this.serviceRelatedFunctions.existingUserCheck(userdata);//license and user check
      const existing = await this.getDepartmentByID(id);
      if (!existing) {
        throw new ConflictException(`Department with id ${id} not found`);
      }
      const { name, code, description } = updateDepartmentDto;
      if (!name && !code && !description) throw new ConflictException("Nothing to update");
      const nameAndCodeCheckExistsParams: nameAndCodeCheckExistsParamsInterface = { name: name, code: code, license_id: userdata.license_id, department_id: id };
      await this.serviceRelatedFunctions.nameAndCodeCheckExitsUpdate(nameAndCodeCheckExistsParams);//name and code uniqueness check


      const updatedata: ValidateUpdateData = this.serviceRelatedFunctions.validateUpdateData({ name, code, description }, userdata.user_id)
      // console.log('Update Data:', updatedata);

      // console.log(updatedata.name,updatedata.code,updatedata.description);
      const updatedDepartment: m_master_department = await this.prismaService.m_master_department.update({
        where: { id },
        data: updatedata
        ,
      });
      // console.log('Updated Department:', updatedDepartment);
      const logParams: logParam = {
        department: updatedDepartment,
        action: action.Modified,
        userdata,
        PreviousData: existing,
      };
      this.serviceRelatedFunctions.logFunction(logParams);

   

      return { updatedDepartment };
    } catch (error) {
      throw error;
    }
  }


  async departmentFindAll(search?: string,status?:string,limit?,name?,code?,description?) {
    search = search || '';
    limit=limit || 10
    name=name || ``
    code = code || ``
    description = description || ``
    console.log(search,status,limit,name,code,description)
    status=status || `1`
    // const status=1
    // const data: GlobalFindAll = {
    //   name: '',
    //   code: ``,
    //   description: '',
    //   created_by_id: 0,
    //   modified_by_id: 2
    // };
    
   if(status.length>2){
    status=`IN(1,0)`
   }
   
     if(status==`1`){
      
      status=`IN (1)`
    }
    else if(status){
        status=`IN (0)`
      }
    
    
    // const limit = 100;
    // const { name, code, description} = data;
//username with id createdby,modifiedby 
    // const individualFiltersQuery = ` name LIKE  '%${name}%' and code LIKE '%${code}%' and description LIKE '%${description}%' `;
    const fullSearchQuery= `SELECT * FROM m_master_department`
    const individualFiltersQuery = `name LIKE  '%${name}%' 
                                    OR code LIKE '%${code}%' 
                                    OR description LIKE '%${description}%'`;
                                    console.log(status)
    const statusFilter = status ? `AND status  ${status}` : ``
    const query = `${fullSearchQuery} where  (${individualFiltersQuery})  ${statusFilter} LIMIT ${limit} `;
    
    //global search

    // console.log('Individual Filters Query:', individualFiltersQuery);
    // const resdata = await this.prismaService.m_master_department.findMany({
    //   where: {
    //     AND: [
    //       { name: { contains: name } },
    //       { code: { startsWith: code } },
    //       { description: { contains: description } },
    //       { created_by_id: created_by_id },
    //       { modified_by_id: modified_by_id }
    //   ]
    //   }
    // })
    //  await this.prismaService.$queryRaw`SELECT * FROM m_master_department `
    
    
    

      
      console.log(query)
       const departments = await this.prismaService.$queryRaw(Prisma.raw(query));
       console.log(departments)
    // const globalSearchQuery = `SELECT * FROM m_master_department WHERE name LIKE  '%${userinput}%' OR code LIKE '%${userinput}%' OR description LIKE '%${userinput}%'`
    // console.log(globalSearchQuery)
    // return this.prismaService.$queryRaw(Prisma.raw(`${globalSearchQuery} or (${individualFiltersQuery}) limit ${limit}`));
    return departments
    // const query=`SELECT * FROM m_master_department WHERE name LIKE  '%'${userinput}'%' OR code LIKE '%'${userinput}'%' OR description LIKE '%'${userinput}'%'`
    //  return await this.prismaService.$queryRaw`SELECT * FROM m_master_department WHERE name LIKE  '%${userinput}%' OR code LIKE '%${userinput}%' OR description LIKE '%${userinput}%'`


  }
  async deactivate(id: number) {
    return {}
  }

}
