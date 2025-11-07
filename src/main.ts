import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConflictException, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const config = 

  SwaggerModule.setup('v1',app,SwaggerModule.createDocument(app,new DocumentBuilder().setTitle("SyncOffice").addTag("Department","department endpoints").build()))
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
        // Here you can shape your response as required
        return new ConflictException({
          statusCode: 409,
          message: 'Validation failed',
          errors: errors.map(err => ({
            field: err.property,
            constraints: err.constraints,
          })),
        });},
        
    transform:true,
    whitelist: true,
    transformOptions:{
      enableImplicitConversion:true
    }
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


