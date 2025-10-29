import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { log } from "console";
import { PrismaService } from "../../prismaservice";
import { userData } from "../interfaces/department.types";
import { logParam } from "../interfaces/department.types";
import { ValidateUpdateData } from "../interfaces/department.types";
import { nameAndCodeCheckExistsParamsInterface } from '../interfaces/department.types';
import { m_master_department_log } from "generated/department";
import { validateCreateData } from "../interfaces/department.types";
@Injectable()
export class DepartmentServiceRelatedFunctions {

  constructor(private prismaService: PrismaService) { }
  async nameAndCodeCheckExits(data: nameAndCodeCheckExistsParamsInterface) {
    try {
      if (data.name !== undefined) {
        const existingname = await this.prismaService.m_master_department.findFirst({
          where: {
            license_id: data.license_id,
            name: data.name
          },
        });
        if (existingname) {
          throw new ConflictException(
            `Department name  already exists within license ${data.license_id}`,
          );
        }
      }
      if (data.code !== undefined) {
        const existingcode = await this.prismaService.m_master_department.findFirst({
          where: {
            license_id: data.license_id,
            code: data.code
          },
        });
        if (existingcode) {
          throw new ConflictException(
            `Department  code already exists within license ${data.license_id}`,
          );
        }
      }
    }
    catch (error) {
      throw new ConflictException(error)
    }
  }

  async nameAndCodeCheckExitsUpdate(data: nameAndCodeCheckExistsParamsInterface) {
    try {
      if (data.name !== undefined) {
        const existingname = await this.prismaService.m_master_department.findFirst({
          where: {
            license_id: data.license_id,
            name: data.name,
            NOT: {
              id: data.department_id,
            },
          }
          ,
        });

        if (existingname) {
          throw new ConflictException(
            `Department name  already exists within license ${data.license_id}`,
          );
        }
      }

      if (data.code !== undefined) {
        const existingcode = await this.prismaService.m_master_department.findFirst({
          where: {
            license_id: data.license_id,
            code: data.code,
            NOT: {
              id: data.department_id,
            },
          },
        });
        if (existingcode) {
          throw new ConflictException(
            `Department  code already exists within license ${data.license_id}`,
          );
        }
      }
    }
    catch (error) {
      throw new ConflictException(error)
    }
  }



  async existingUserCheck(userdata: userData) {


    const existinguser = await this.prismaService.user_information.findUnique({
      where: { id: userdata.user_id, license_id: userdata.license_id },
    });
    // console.log(userdata)
    if (!existinguser) {
      throw new NotFoundException(`User not found`);
    }
  }

  async logFunction({ action, department, userdata, PreviousData }: logParam) {
    try {
      let change_description = "";
      switch (action) {
        case "Created":
          change_description = `Department Created Successfully`;
          break;
        case "Activated":
          change_description = `Department  was activated.`;
          break;
        case "Deactivated":
          change_description = `Department  was deactivated.`;
          break;
        case "Download":
          change_description = `Department  was downloaded.`;
          break;
        case 'Modified':
          change_description = `Department  was modified. Changes: ${this.getExistingChangesDescription(PreviousData, department)}`;
          // console.log('Change Description in logFunction:', change_description);
          break;
        default:
          change_description = "Unknown action.";
          break;
      }


      const logged:m_master_department_log = await this.prismaService.m_master_department_log.create({
        data: {
          name: department.name,
          code: department.code,
          license_id: userdata.license_id,
          description: department.description,
          status: department.status,
          change_description: change_description,
          action: action,
          department_id: department.id,
          created_by_id: userdata.user_id,
        }
      })

      return {
        logged
      }
    }
    catch (error) {
     throw new ConflictException(error)
    }
  }

  getExistingChangesDescription(existing, updateDepartmentDto): string {
    const { name, code, description } = updateDepartmentDto;
    let changeDescription = '';
    let changesDetected = false;

    if (existing.name !== name) {
      changesDetected = true;
      changeDescription += `Name changed from ${existing.name} to ${name}. `;
    }

    if (existing.code !== code) {
      changesDetected = true;
      changeDescription += `Code changed from ${existing.code} to ${code}. `;
    }

    if (existing.description !== description) {
      changesDetected = true;
      changeDescription += `Description changed from ${existing.description} to ${description}. `;
    }

    // console.log('Changes Detected:', changesDetected);
    // if (changesDetected) {
    //   console.log('Change Description:', changeDescription);
    // }
    return changeDescription;
  }

  validateUpdateData(updatedata: { name?: string, code?: string, description?: string }, modify_by_id: number): ValidateUpdateData {

    const { name, code, description } = updatedata;
    if (name !== undefined) {
      updatedata.name = name;
    }
    if (code !== undefined) {
      updatedata.code = code;
    }
    if (description !== undefined) {
      updatedata.description = description;
    }

    return { ...updatedata, modified_on: new Date(), modified_by_id: modify_by_id };



  }
  validateCreateData(createdata: { name: string, code: string, description: string }): validateCreateData {

    const { name, code, description } = createdata;
     if (name !== undefined) {
      createdata.name = name;
    }
    if (code !== undefined) {
      createdata.code = code;
    }
    if (description !== undefined) {
      createdata.description = description;
    }
    return createdata;}

}
