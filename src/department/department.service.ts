import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prismaservice';
import { GlobalFindAll, userData } from './interfaces/department.types';
import { ResponseDto } from './dto/responsedto';
import { action, m_master_department, Prisma } from '../../generated/department';
import { logParam } from './interfaces/department.types';
import { DepartmentServiceRelatedFunctions, stringifyWithBigInt } from './utility/department-service-utilities';
import { ValidateUpdateData } from './interfaces/department.types';

import { nameAndCodeCheckExistsParamsInterface } from './interfaces/department.types';
import { validateCreateData } from './interfaces/department.types';
// import { stat } from 'fs';
// import { count } from 'console';

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
      // console.log(error.message);
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
  async deactivate(id: number) {
    return {}
  }


  


async departmentFindAll(
  userCredential:userData,
  search?: string,
  status?: string,
  limit?: number,
  offset?: number,
  name?: string,
  code?: string,
  description?: string,
) {
  try {
    console.log(search,status,limit,offset,name,code,description)
    const licenseId = userCredential.license_id;

    // Defaults & sanitise
    search = (search || '').trim();
    name = (name || '').trim();
    code = (code || '').trim();
    description = (description || '').trim();
    limit=limit || 5
    let statusFilter = '';
    if (!status || status.length > 2) {
      statusFilter = ' d.status IN (1,0)';
    } else if (status === '1') {
      statusFilter = ' d.status IN (1)';
    } else if (status === '0') {
      statusFilter = ' d.status IN (0)';
    }
    
   
    const individualQuery=`d.name LIKE '%${name}%' OR d.code LIKE '%${code}%' OR d.description LIKE '%${description}%'`
    const concatFirstLastName=`CONCAT(u_created.first_name, ' ', u_created.last_name)`

    const globalQuery=`d.name LIKE '%${search}%' OR
        d.code LIKE '%${search}%' OR
        d.description LIKE '%${search}%' OR
        ${concatFirstLastName} LIKE '%${search}%' OR
        ${concatFirstLastName} LIKE '%${search}%'`
   
    const baseQuery = `
      FROM m_master_department d
      INNER JOIN user_information u_created ON d.created_by_id = u_created.id
      LEFT JOIN user_information u_modified ON d.modified_by_id = u_modified.id
      WHERE d.license_id = ${licenseId} AND (${globalQuery}) AND (${individualQuery}) AND ${statusFilter}
    `;

    
    const dataQuery = `SELECT d.id,d.name,d.code,d.description,d.status,d.created_on,
        ${concatFirstLastName} AS created_by,d.modified_on,
        ${concatFirstLastName} AS modified_by,
        d.created_by_id,
        d.modified_by_id,
        d.license_id
      ${baseQuery}
    `;

    const countQuery = `
      SELECT COUNT(*) AS total
      ${baseQuery};
    `;

  
     const data= await this.prismaService.$queryRaw(Prisma.raw(dataQuery))
     console.log(dataQuery)
     console.log(data)
     const countResult= await this.prismaService.$queryRaw(Prisma.raw(countQuery))
    //  JSON.stringify({...countResult,total:Number(countQuery.total)})
    //   const serializedData = countResult.map(item => ({
    //   ...item,
    //   total: item.total.toString(), 
    // }));\
    const total=stringifyWithBigInt(countResult)

console.log(countResult)
    return {
      total,
      data,
    };
  } catch (error) {
    console.error('Error in departmentFindAll:', error);
    throw error;
  }
}



}

  

