import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { departmentservicerelatedfunctions } from './department/utility/departmentservicerelatedfunctions';
import { DepartmentService } from './department/department.service';
import { DepartmentController } from './department/department.controller';
import { PrismaService } from './prismaservice';

@Module({
  imports: [DepartmentModule],
  controllers: [AppController,DepartmentController],
  providers: [AppService,{provide:APP_INTERCEPTOR,useClass:ClassSerializerInterceptor},departmentservicerelatedfunctions,DepartmentService,PrismaService],
})
export class AppModule {}
