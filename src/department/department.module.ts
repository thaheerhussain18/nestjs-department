import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { PrismaService } from 'src/prismaservice';
import { departmentservicerelatedfunctions } from './utility/departmentservicerelatedfunctions';


@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService,PrismaService,departmentservicerelatedfunctions],
})

export class DepartmentModule {}
