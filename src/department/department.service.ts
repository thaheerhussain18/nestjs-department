import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prismaservice';
import { userData } from './interfaces/userdata.interface';
import { ResponseDto } from './dto/responsedto';

import { action } from '../../generated/department';
import { logParam } from './interfaces/logparam';
import { DepartmentServiceRelatedFunctions } from './utility/departmentservicerelatedfunctions';
import { response } from 'express';
import { get } from 'http';
import { log } from 'console';


@Injectable()
export class DepartmentService {
  constructor(private prismaService: PrismaService,
    private serviceRelatedFunctions: DepartmentServiceRelatedFunctions
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto, userdata: userData) {
    try {
      let { name, code, description } = createDepartmentDto;
      // console.log('post method');      
      await this.serviceRelatedFunctions.existingUserCheck(userdata)
      await this.serviceRelatedFunctions.nameAndCodeCheckExits(name, code, userdata.license_id)


      const department = await this.prismaService.m_master_department.create({
        data: {
          name: name,
          code: code,
          license_id: userdata.license_id,
          description: description,
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
    const updatedDepartment = await this.prismaService.m_master_department.update({
      where: { id },
      data: {
        name,
        code,
        description,
        modified_on: new Date(),
        modified_by_id: userdata.user_id,
      },
    });
    console.log('Updated Department:', updatedDepartment);
    const logParams: logParam = {
      department: updatedDepartment,
      action: action.Modified,
      userdata,
      PreviousData: existing,
    };
    this.serviceRelatedFunctions.logFunction(logParams);

    console.log(updatedDepartment);

    return { updatedDepartment };
  } catch (error) {
    throw error;
  }
} async getDepartmentByID(id: number) {
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
