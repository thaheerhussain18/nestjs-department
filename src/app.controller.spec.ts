import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { DepartmentServiceRelatedFunctions } from './department/utility/department-service-utilities';
import { PrismaService } from './prismaservice';
import { DepartmentModule } from './department/department.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = 
    await Test.createTestingModule({
      // imports:[DepartmentModule],
      controllers: [AppController,DepartmentController],
      providers: [AppService,DepartmentService,DepartmentServiceRelatedFunctions,PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
