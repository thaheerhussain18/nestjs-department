import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { departmentservicerelatedfunctions } from './department/utility/departmentservicerelatedfunctions';
import { PrismaService } from './prismaservice';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController,DepartmentController],
      providers: [AppService,DepartmentService,departmentservicerelatedfunctions,PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
