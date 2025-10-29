import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { PrismaService } from '../prismaservice';
import { DepartmentServiceRelatedFunctions } from './utility/department-service-utilities';
import { DepartmentModule } from './department.module';

import { ValidationPipe } from '@nestjs/common';

describe('DepartmentController', () => {
  let controller: DepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentController],
      providers: [DepartmentService,PrismaService,DepartmentServiceRelatedFunctions ],
    }).compile()

    
  
    controller = module.get<DepartmentController>(DepartmentController);
   
   
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

 const generateDepartmentData = (overrides = {}) => {
  const name = `cvDDD${Math.floor(Math.random() * 10000)}`; // Generates HRxxxx
  const code = `1HR${Math.floor(Math.random() * 10000)}`;  // Generates HRxxxx

  return {
    name,
    code,
    description: 'Human Resources Department'
    
  };
};

  it('it should create an department',async()=>{
const createDepartmentDto = generateDepartmentData()
    const response = await controller.create(createDepartmentDto);
    expect(response).toBeDefined();
    console.log(response)
    expect(response.name).toBe(createDepartmentDto.name)
    ;
    expect(response.code).toBe(createDepartmentDto.code);
  })

});
