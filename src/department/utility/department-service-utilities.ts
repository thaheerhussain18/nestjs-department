import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { log } from "console";
import { PrismaService } from "../../prismaservice";
import { userData } from "../interfaces/department.types";
import { logParam } from "../interfaces/department.types";
import { ValidateUpdateData } from "../interfaces/department.types";
import { nameAndCodeCheckExistsParamsInterface } from '../interfaces/department.types';
import { m_master_department_log } from "generated/department";
import { validateCreateData } from "../interfaces/department.types";
import puppeteer from "puppeteer";
import moment from "moment";
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

    getDepartmentRecord=async (depid:number,license:number)=>{
return await this.prismaService.m_master_department.findFirst({where:{id:depid,license_id:license}})
}

    departmentStatusCheck=(record,flag:boolean,message:string)=>{
      if(record?.status==flag){
        throw new ConflictException(message)
      }
    }

    async updateDepartmentStatus(depId:number,userData:userData,flag:boolean){
       return await this.prismaService.m_master_department.update({
        where: { id: depId }, data: {
          status: flag,
          modified_on:new Date(),
          modified_by_id: userData.user_id,
        }
      })
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
    // console.log(department,PreviousData)
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

      async generateTablePDF(data: any[], fileName: string, columns: string[]): Promise<Buffer> {
    try {
      const browser = await puppeteer.launch({
        headless: true, // Opt in to the new headless mode,
        args: ['--no-sandbox'],
        executablePath: process.env.FILE_GENERATION_CHROME_PATH,
      });

      const page = await browser.newPage();

      // Define some constants for layout and styling
      const mainHeader = 'SyncOffice';
      const currentDate = moment().format('DD-MM-YYYY');

      // Define the header template
      const headerTemplate = `
        <div style="width: 100%; color: black;padding: 0px 20px 15px 20px;  font-size: 13px; display: flex; justify-content: space-between; align-items: center; font-weight: 600;">
          <div>${mainHeader}</div>
          <div>${fileName}</div>
          <div>${currentDate}</div>
        </div>
      `;

      // Define the footer template
      const footerTemplate = `
        <div style="width: 100%; font-size: 12px;padding: 20px 20px 0px 10px; border-top: 1px solid #ddd; font-weight: 600;">
          <div style="color: black; display: flex; align-items: center; justify-content: space-between;">
            <span style="margin-left: 10px;">Copyright © Candy Technologies Private Limited. All Rights Reserved.</span>
          </div>
        </div>
      `;

      // Create an HTML template for the PDF content
      const content = `
            <html>
              <head>
                <style>
                  body {
                    font-family: 'Montserrat', sans-serif;
                    margin: 0;          
                  }
                  table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                    border-left: 1px dotted #ddd;
                  }

                  td {
                    padding: 8px;
                    text-align: left;
                    border-right: 1px dotted #ddd;
                    font-size: 12px;
                  }

                  th {
                    background-color: #f5f5f5;
                    color: black;
                    padding: 8px;
                    text-align: left;
                    font-size: 12px;
                    border-right: 1px dotted #ddd;
                  }
                </style>
              </head>
              <body>
              <table>
                <thead>
                  <tr style="text-transform: capitalize">
                    ${columns.map((header) => `<th>${header.replace(/_/g, ' ')}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${data
          .map(
            (row) => `
                    <tr>
                      ${columns.map((header) => `<td>${row[header]}</td>`).join('')}
                    </tr>
                  `,
          )
          .join('')}
                </tbody>
              </table>
            </body>
            </html>
          `;
      // Set the HTML content of the page
      await page.setContent(content);

      // Generate the PDF and store it in a Buffer
      const pdfBuffer = Buffer.from(
        await page.pdf({
          format: 'A4',
          printBackground: true,
          margin: { top: '50px', bottom: '50px', left: '20px', right: '20px' },
          displayHeaderFooter: true,
          headerTemplate: headerTemplate,
          footerTemplate: footerTemplate,
        }),
      );

      // Close the browser
      await browser.close();

      // Return the PDF as a Buffer
      return pdfBuffer;
    } catch (error) {
      console.error(error.message);
      throw new ConflictException('Something went wrong while generating PDF file');
    }
  }
  

}

export const stringifyWithBigInt = (obj: any) => {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'bigint') {
      return value.toString();
    }
    return value;
  });
};


