import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prismaservice';
import { userData } from './interfaces/userdata.interface';
import { ResponseDto } from './dto/responsedto';

import { action } from '../../generated/department';
import { logParam } from './interfaces/logparam';
import { departmentservicerelatedfunctions } from './utility/departmentservicerelatedfunctions';


@Injectable()
export class DepartmentService {
  constructor(private prismaService: PrismaService,
    private serviceRelatedFunctions:departmentservicerelatedfunctions
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto, userdata: userData ) {
    try {
      let { name, code, description } = createDepartmentDto;
      console.log('post method');

      
      await this.serviceRelatedFunctions.existingUserCheck(userdata)
      await this.serviceRelatedFunctions.nameAndCodeCheckExits(name,code,userdata.license_id) 


   const  department = await this.prismaService.m_master_department.create({
        data: {
          name: name,
          code: code,
          license_id: userdata.license_id,
          description: description,
          status: true,
          created_by_id: userdata.user_id,
        },
      include:{
          created_by:{
            select:{
              first_name:true,
              last_name:true
            }
          }
        }

      });
      const logParameter:logParam={
        department:department,
        action:action.Created,
        userdata:userdata
      }
      await this.serviceRelatedFunctions.logFunction(logParameter)
      return new ResponseDto(department)

    }
    catch (error) {
      throw error
    }
  }

  async findAll() {
    return {}
  }

  async findOne(id: number) {
    return {}
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {

    return {}

  }

  async deactivate(id: number) {
   return {}
  }
  
}
