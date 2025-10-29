import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { PrismaService } from '../prismaservice'
import { DepartmentServiceRelatedFunctions } from './utility/department-service-utilities';


@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService,PrismaService,DepartmentServiceRelatedFunctions],
})

export class DepartmentModule {}
