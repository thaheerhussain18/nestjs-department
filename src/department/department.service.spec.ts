import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { PrismaService } from '../prismaservice';
import { departmentservicerelatedfunctions } from './utility/departmentservicerelatedfunctions';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let prismaService: PrismaService;
  let departmentserviceRelatedFunction: departmentservicerelatedfunctions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      providers: [DepartmentService, departmentservicerelatedfunctions,PrismaService],
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  beforeEach(() => {
    prismaService = new PrismaService();
    departmentserviceRelatedFunction = new departmentservicerelatedfunctions(prismaService);
    service = new DepartmentService(prismaService, departmentserviceRelatedFunction);
  });

  it('it should create a department',async ()=>{
    const createDepartmentDto = { name: 'thaheer', code: 'DEP001', description: 'Dev' };
    const userdata = { user_id: 1, license_id: 1 };
    //mock errors
    departmentserviceRelatedFunction.existingUserCheck = jest.fn().mockResolvedValue(undefined);
    departmentserviceRelatedFunction.nameAndCodeCheckExits = jest.fn().mockResolvedValue(undefined);
    prismaService.m_master_department.create = jest.fn().mockResolvedValue({
      name: 'Thaheer',
      code: 'DEP001',
      license_id: 1,
      description: 'Dev',
      created_by_id: 1,
      status:true,
      created_on:new Date(),
      created_by: { first_name: 'thaheer', last_name: 'hussain' },
    });
    
    departmentserviceRelatedFunction.logFunction = jest.fn().mockResolvedValue(undefined);  
    const response = await service.create(createDepartmentDto, userdata);
  console.log(response)
    
    expect(response).toHaveProperty('code');
    expect(prismaService.m_master_department.create).toHaveBeenCalledTimes(1);
    expect(departmentserviceRelatedFunction.logFunction).toHaveBeenCalledTimes(1);


  })

  
});
