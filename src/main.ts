import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder().addTag("Department","department endpoints").build()

  SwaggerModule.setup('v1',app,SwaggerModule.createDocument(app,config))
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform:true,
    transformOptions:{
      enableImplicitConversion:true
    }
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
