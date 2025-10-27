import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { PrismaService } from '../prismaservice';
import { DepartmentServiceRelatedFunctions } from './utility/departmentservicerelatedfunctions';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let prismaService: PrismaService;
  let departmentServiceHelper: DepartmentServiceRelatedFunctions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentService, DepartmentServiceRelatedFunctions, PrismaService],
    }).compile();

    prismaService = new PrismaService();
    departmentServiceHelper = new DepartmentServiceRelatedFunctions(prismaService);
    service = new DepartmentService(prismaService, departmentServiceHelper);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //to test whether the create feature working or not 
  it('should create a department successfully', async () => {
    const createDepartmentDto = { name: 'thahseer', code: 'DEP001', description: 'Dev' };
    const userdata = { user_id: 1, license_id: 1 };

    // Mock helper functions
    departmentServiceHelper.existingUserCheck = jest.fn().mockResolvedValue(undefined);
    departmentServiceHelper.nameAndCodeCheckExits = jest.fn().mockResolvedValue(undefined);
    departmentServiceHelper.logFunction = jest.fn().mockResolvedValue({ logged: true });

    // Mock Prisma create
    prismaService.m_master_department.create = jest.fn().mockResolvedValue({
      id: 1,
      name: 'thahseer',
      code: 'DEP001',
      license_id: 1,
      description: 'Dev',
      status: true,
      created_by_id: 1,
      created_on: new Date(),
      created_by: { first_name: 'Thaheer', last_name: 'Hussain' },
    });

    const response = await service.create(createDepartmentDto, userdata);

    
    expect(response).toHaveProperty('id', 1);
    expect(response).toHaveProperty('name', 'thahseer');
    expect(response).toHaveProperty('code', 'DEP001');

    expect(prismaService.m_master_department.create).toHaveBeenCalledTimes(1);
    expect(departmentServiceHelper.logFunction).toHaveBeenCalledTimes(1);
  });

  it('should throw ConflictException if department name or code exists', async () => {
    const createDepartmentDto = { name: 'thaheer', code: 'DEP001', description: 'Dev' };
    const userdata = { user_id: 1, license_id: 1 };

    departmentServiceHelper.existingUserCheck = jest.fn().mockResolvedValue(undefined);
    departmentServiceHelper.nameAndCodeCheckExits = jest.fn().mockRejectedValue(
      new ConflictException('Department name or code already exists')
    );

    prismaService.m_master_department.create = jest.fn();
departmentServiceHelper.logFunction = jest.fn();
    await expect(service.create(createDepartmentDto, userdata)).rejects.toThrow(
      ConflictException
    );

    expect(prismaService.m_master_department.create).not.toHaveBeenCalled();
    expect(departmentServiceHelper.logFunction).not.toHaveBeenCalled();
  });

  it('should throw NotFoundException if user does not exist', async () => {
    const createDepartmentDto = { name: 'thaheer', code: 'DEP001', description: 'Dev' };
    const userdata = { user_id: 999, license_id: 1 };

    departmentServiceHelper.existingUserCheck = jest.fn().mockRejectedValue(
      new NotFoundException('User not found')
    );

    prismaService.m_master_department.create = jest.fn();
    departmentServiceHelper.logFunction = jest.fn();
    await expect(service.create(createDepartmentDto, userdata)).rejects.toThrow(
      NotFoundException
    );

    expect(prismaService.m_master_department.create).not.toHaveBeenCalled();
    expect(departmentServiceHelper.logFunction).not.toHaveBeenCalled();
  });
});
