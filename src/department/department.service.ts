import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prismaservice';
import { GlobalFindAll, SORT_COLUMN, sortingsAllowed, userData } from './interfaces/department.types';
import { ResponseDto } from './dto/responsedto';

import { logParam } from './interfaces/department.types';
import { DepartmentServiceRelatedFunctions, stringifyWithBigInt } from './utility/department-service-utilities';
import { ValidateUpdateData } from './interfaces/department.types';

import { nameAndCodeCheckExistsParamsInterface } from './interfaces/department.types';
import { validateCreateData } from './interfaces/department.types';
import { GetAllDepartment } from './dto/get-department.dto';
import puppeteer from 'puppeteer';
import moment from 'moment'
import { action, m_master_department, Prisma } from '../../generated/department';

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

  async getDepartmentByID(depid: number, userData: userData) {
    if (!depid) throw new ConflictException('Department ID is required');

    return (await this.serviceRelatedFunctions.getDepartmentRecord(depid, userData.license_id))
  }


  async update(id: number, updateDepartmentDto: UpdateDepartmentDto, userdata: userData) {
    try {

      await this.serviceRelatedFunctions.existingUserCheck(userdata);//license and user check
      const existing = await this.getDepartmentByID(id, userdata);
      if (!existing) {
        throw new ConflictException(`Department id  not found`);
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


  async departmentFindAll(
    userCredential: userData,
    getParams?: GetAllDepartment
  ): Promise<{
    totalCount: number;
    data: any[];
    limit: number;
    offset: number;
    page: number;
  }> {
    try {
      const licenseId = userCredential.license_id;

      // ✅ Default query setup even if getParams is not passed
      let limit = getParams?.limit || 10;
      let offset = getParams?.offset || 1;
      const order = getParams?.order || SORT_COLUMN.ASC;
      const search = getParams?.search;
      const name = getParams?.name;
      const code = getParams?.code;
      const description = getParams?.description;
      const status = getParams?.status;
      const page = (offset - 1) * limit;

      let sort_by=getParams?.sort_by
      const sortingsAllowed=["status","modified_by","created_by","created_on","modified_on","description","code","name"]
      if(getParams?.sort_by ){
        if(sortingsAllowed.includes(getParams.sort_by)===false)
          sort_by='created_on'
      }
      let baseQuery = `
      FROM m_master_department d
      INNER JOIN user_information u_created ON d.created_by_id = u_created.id
      LEFT JOIN user_information u_modified ON d.modified_by_id = u_modified.id
      WHERE d.license_id = ${licenseId}
    `;

      if (search) {
        const safeSearch = search.replace(/'/g, "''");
        baseQuery += `
        AND (
          d.name LIKE '%${safeSearch}%'
          OR d.code LIKE '%${safeSearch}%'
          OR d.description LIKE '%${safeSearch}%'
          OR CONCAT(u_created.first_name, ' ', u_created.last_name) LIKE '%${safeSearch}%'
          OR CONCAT(u_modified.first_name, ' ', u_modified.last_name) LIKE '%${safeSearch}%'
        )
      `;
      }

      if (name) baseQuery += ` AND d.name LIKE '%${name.replace(/'/g, "''")}%'`;
      if (code) baseQuery += ` AND d.code LIKE '%${code.replace(/'/g, "''")}%'`;
      if (description) baseQuery += ` AND d.description LIKE '%${description.replace(/'/g, "''")}%'`;

      if (status === '1') baseQuery += ` AND d.status = 1`;
      else if (status === '0') baseQuery += ` AND d.status = 0`;

      const sortQuery=sort_by?` ORDER BY ${sort_by} ${order}`:``

      const dataQuery = `
      SELECT 
        d.id,
        d.name,
        d.code,
        d.description,
        d.status,
        d.created_on,
        CONCAT(u_created.first_name, ' ', u_created.last_name) AS created_by,
        d.modified_on,
        CONCAT(u_modified.first_name, ' ', u_modified.last_name) AS modified_by,
        d.created_by_id,
        d.modified_by_id,
        d.license_id
      ${baseQuery}
     ${sortQuery}
      LIMIT ${limit} OFFSET ${page};
    `;

      const countQuery = `
      SELECT COUNT(*) AS total
      ${baseQuery};
    `;

      const data = (await this.prismaService.$queryRaw(Prisma.raw(dataQuery))) as any[];
      const countResult = (await this.prismaService.$queryRaw(Prisma.raw(countQuery))) as any[];


      const parsedCount = JSON.parse(stringifyWithBigInt(countResult));
      const totalCount = parsedCount?.[0]?.total ? Number(parsedCount[0].total) : 0;

      // ✅ Always return a valid object
      return { totalCount, data, limit, offset, page };
    } catch (error) {
      console.error('Error in departmentFindAll:', error);
      throw error;
    }
  }

  async deactivate(depid: number, userData: userData) {

    try {
      await this.serviceRelatedFunctions.existingUserCheck(userData)
      const existdep = await this.serviceRelatedFunctions.getDepartmentRecord(depid, userData.license_id)
      console.log(existdep?.id)
      this.serviceRelatedFunctions.departmentStatusCheck(existdep, false, "No activate record found with the existing department id")
      const data = await this.serviceRelatedFunctions.updateDepartmentStatus(depid, userData, false)

      const logParameter: logParam = {
        department: data,
        action: action.Deactivated,
        userdata: userData
      }
      await this.serviceRelatedFunctions.logFunction(logParameter)

      return { "message": "deactivated successfully", "data": data }
    }
    catch (error) {
      throw error
    }

  }


  async activate(depid: number, userData: userData) {

    try {
      await this.serviceRelatedFunctions.existingUserCheck(userData)
      const existdep = await this.serviceRelatedFunctions.getDepartmentRecord(depid, userData.license_id)
      this.serviceRelatedFunctions.departmentStatusCheck(existdep, true, "No deativated record found with the existing department id")
      const data = await this.serviceRelatedFunctions.updateDepartmentStatus(depid, userData, true)
      const logParameter: logParam = {
        department: data,
        action: action.Activated,
        userdata: userData
      }
      await this.serviceRelatedFunctions.logFunction(logParameter)
      return { "message": "deactivated successfully", "data": data }
    }


    catch (error) {
      throw error
    }

  }

    async departmentLogFindAll(
    userCredential: userData,
    getParams?: GetAllDepartment
  ): Promise<{
    totalCount: number;
    data: any[];
    limit: number;
    offset: number;
    page: number;
  }> {
    try {
      const licenseId = userCredential.license_id;
      let limit = getParams?.limit || 10;
      let offset = getParams?.offset || 1;
      const sort_by = getParams?.sort_by || 'created_on';
      const order = getParams?.order || SORT_COLUMN.ASC;
      const search = getParams?.search;
      const name = getParams?.name;
      const code = getParams?.code;
      const description = getParams?.description;
      const change_description=getParams?.change_description
      const status = getParams?.status;
      const page = (offset - 1) * limit;

      let baseQuery = `
      FROM m_master_department_log d
      INNER JOIN user_information u_created ON d.created_by_id = u_created.id
      WHERE d.license_id = ${licenseId}
    `;

       if (search) {
        const safeSearch = search.replace(/'/g, "''");
        baseQuery += `
        AND (
          d.name LIKE ${safeSearch}
          OR d.code LIKE ${safeSearch}
          OR d.description LIKE '%${safeSearch}
          OR CONCAT(u_created.first_name, ' ', u_created.last_name) LIKE ${safeSearch}
          OR CONCAT(u_modified.first_name, ' ', u_modified.last_name) LIKE ${safeSearch}
        )
      `;
      }

     

      if (name) baseQuery += ` AND d.name LIKE '%${name}%'`;
      if (code) baseQuery += ` AND d.code LIKE '%${code}%'`;
      if (description) baseQuery += ` AND d.description LIKE '%${description}%'`;
      if(change_description) baseQuery += `AND d.change_description LIKE '%${change_description}%'`

      if (status === '1') baseQuery += ` AND d.status = 1`;
      else if (status === '0') baseQuery += ` AND d.status = 0`;
      else if(status ===`1.0`) baseQuery += `AND d.status IN (1,0)`

      const dataQuery = `
      SELECT 
        d.id,
        d.name,
        d.code,
        d.description,
        d.status,
        d.created_on,
        d.change_description,
        CONCAT(u_created.first_name, ' ', u_created.last_name) AS created_by,
        d.created_by_id,
        d.license_id
      ${baseQuery}
      ORDER BY ${sort_by} ${order}
      LIMIT ${limit} OFFSET ${page};
    `;

      const countQuery = `
      SELECT COUNT(*) AS total
      ${baseQuery};
    `;

    console.log(baseQuery)
      const data = (await this.prismaService.$queryRaw(Prisma.raw(dataQuery))) as any[];
      const countResult = (await this.prismaService.$queryRaw(Prisma.raw(countQuery))) as any[];


      const parsedCount = JSON.parse(stringifyWithBigInt(countResult));
      const totalCount = parsedCount?.[0]?.total ? Number(parsedCount[0].total) : 0;

      return { totalCount, data, limit, offset, page };
    } catch (error) {
      console.error('Error in departmentFindAll:', error);
      throw error;
    }
  }


// async getAllDepartments({generatePdfDto,loggedInUserDataValues,}: {generatePdfDto;loggedInUserDataValues: userData;}) {
//   try {
//   await this.serviceRelatedFunctions.existingUserCheck(loggedInUserDataValues);
//   const licenseId = loggedInUserDataValues.license_id;
//   const {search,name,code,description,status,created_by_id,modified_by_id,sort_column,sort_order,createdBy,modifiedBy} = generatePdfDto || {};
 
//   const columnsValue = generatePdfDto?.columns;
//   const requestedColumns: string[] =
//     typeof columnsValue === 'string' && columnsValue.trim() !== ''
//       ? columnsValue
//           .split(',')
//           .map((col: string) => col.trim())
//           .filter(Boolean)
//       : [];
//   if (requestedColumns.length === 0) {
//     throw new ConflictException(
//       `Invalid columns request. You sent an empty column string.Please provide at least one valid column.`,
//     );
//   }
      
//   const PDF_COLUMNS_LIMIT=6;
//   if (requestedColumns.length>PDF_COLUMNS_LIMIT){
//     throw new ConflictException(`Maximum selection of columns for pdf is ${PDF_COLUMNS_LIMIT}`);
//   }
//   const createdByIds =created_by_id?.split('.').map((id) => Number(id)).filter((id) => !isNaN(id)) || [];
//   const modifiedByIds =modified_by_id?.split('.').map((id) => Number(id)).filter((id) => !isNaN(id)) || [];
 
//   let statusValue: boolean | undefined;
//   if (status === '1') {
//     statusValue = true;
//   }
//   if (status === '0') {
//     statusValue = false;
//   }
 
//   const allowedColumns = [
//     'd.id',
//     'd.name',
//     'd.code',
//     'd.description',
//     "CASE WHEN d.status = 1 THEN 'Active' WHEN d.status = 0 THEN 'InActive' ELSE '-' END AS status",
//     'd.created_on',
//     "CONCAT(u_created.first_name, ' ', u_created.last_name) AS created_by",
//     'd.modified_on',
//     "CONCAT(u_modified.first_name, ' ', u_modified.last_name) AS modified_by",
//   ];
 
 
//   const invalidColumns = requestedColumns.filter(col => !allowedColumns.some(aCol => aCol.toLowerCase().endsWith(col.toLowerCase())));
 
//   if (invalidColumns.length > 0) {
//     throw new ConflictException(
//       `Invalid columns requested: [${invalidColumns.join(', ',)}].`,
//     );
//   }
//   //console.log({invalidColumns});
 
//   const selectedColumns =
//   requestedColumns.length > 0
//     ? allowedColumns.filter((col) =>
//           requestedColumns.some((reqCol) => col.includes(reqCol)),)
//     :[];
//   //console.log({selectedColumns})
//   const select = selectedColumns.join(', ');
 
//   const conditions: string[] = [];
//   if (licenseId ) conditions.push(`d.license_id = ${licenseId}`);
//   if (search) conditions.push(`(d.name LIKE '%${search}%' OR d.code LIKE '%${search}%' OR d.description LIKE '%${search}%'OR CONCAT(u_created.first_name, ' ', u_created.last_name) LIKE '%${search}%' OR CONCAT(u_modified.first_name, ' ', u_modified.last_name) LIKE '%${search}% )`,);
//   if (name) conditions.push(`d.name LIKE '%${name}%'`);
//   if (code) conditions.push(`d.code LIKE '%${code}%'`);
//   if (description) conditions.push(`d.description LIKE '%${description}%'`);
//   if (statusValue !== undefined) conditions.push(`d.status = ${statusValue ? 1 : 0}`);
//   if (createdByIds.length > 0) conditions.push(`d.created_by_id IN (${createdByIds.join(',')})`);
//   if (modifiedByIds.length > 0) conditions.push(`d.modified_by_id IN (${modifiedByIds.join(',')})`);
//   if (createdBy) conditions.push(`CONCAT(u_created.first_name, ' ', u_created.last_name) LIKE '%${createdBy}%'`);
//   if (modifiedBy) conditions.push(`CONCAT(u_modified.first_name, ' ', u_modified.last_name) LIKE '%${modifiedBy}%'`);
 
 
 
//   const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
//   const allowedSortColumns = [
//       'name',
//       'code',
//       'description',
//       'status',
//       'created_on',
//       'modified_on',
//       'created_by',
//       'modified_by'
//     ];
    
//     const sortColumn = allowedSortColumns.includes(sort_column || '')
//       ? sort_column
//       : 'd.created_on';
//     const sortOrder = (sort_order || 'asc').toLowerCase() === 'desc' ? 'DESC' : 'ASC';
 
//   const query = `
//     SELECT ${select}
//     FROM department d
//     JOIN user_information u_created
//       ON d.created_by_id = u_created.id
//     LEFT JOIN user_information u_modified
//       ON d.modified_by_id = u_modified.id
//     ${where}
//     ORDER BY ${sortColumn} ${sortOrder};
//   `;
// console.log(query)
//   const data =await this.prismaService.$queryRawUnsafe<any[]>(query)
 
//   return {
//       data,
//       requestedColumns,
//     };
//   }catch(error) {
//     throw error;
//   }
// }



}




