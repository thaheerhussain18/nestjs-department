import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prismaservice';
import { userData } from './interfaces/userdata.interface';
import { ResponseDto } from './dto/responsedto';
import { action, m_master_department } from '../../generated/department';
import { logParam } from './interfaces/logparam';
import { DepartmentServiceRelatedFunctions } from './utility/department-service-utilities';
import { ValidateUpdateData } from './interfaces/validate-update-data';

import { nameAndCodeCheckExistsParamsInterface } from './interfaces/name-code-check-data-interface';
import { validateCreateData } from './interfaces/validate-create-data';

@Injectable()
export class DepartmentService {
  constructor(private prismaService: PrismaService,
    
    private serviceRelatedFunctions: DepartmentServiceRelatedFunctions
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto, userdata: userData) {
    try {
      let { name, code, description } = createDepartmentDto;

      if (!name && !code && !description) throw new BadRequestException("Nothing to update");
      const createdata:validateCreateData=this.serviceRelatedFunctions.validateCreateData({ name, code, description });
      // console.log('post method');      
      await this.serviceRelatedFunctions.existingUserCheck(userdata)
      const nameAndCodeCheckExistsParams:nameAndCodeCheckExistsParamsInterface = {name:name,code:code,license_id: userdata.license_id};
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
      throw error
    }
  }


  async update(id: number, updateDepartmentDto: UpdateDepartmentDto, userdata: userData) {
    try {

      await this.serviceRelatedFunctions.existingUserCheck(userdata);//license and user check
      const existing = await this.getDepartmentByID(id);
      if (!existing) {
        throw new BadRequestException(`Department with id ${id} not found`);
      }
       const { name, code, description } = updateDepartmentDto;
      if (!name && !code && !description) throw new BadRequestException("Nothing to update");
      const nameAndCodeCheckExistsParams:nameAndCodeCheckExistsParamsInterface = {name:name,code:code,license_id: userdata.license_id, department_id:id};
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

      // console.log(updatedDepartment);

      return { updatedDepartment };
    } catch (error) {
      throw error;
    }
  }
  async getDepartmentByID(id: number) {
    if (!id) throw new BadRequestException('Department ID is required');

    return (await this.prismaService.m_master_department.findFirst({ where: { id } }))
  }


  async findAll() {
    return {}
  }
  async deactivate(id: number) {
    return {}
  }

}
