import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {ConfigService} from "@nestjs/config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const configService=app.get(ConfigService)
  const port = configService.get('port')


 const configSwwager=new DocumentBuilder()
     .setTitle('Api documentation')
     .setDescription('The cats API description')
     .setVersion('1.0')
     .addTag('api')
     .build();
  const documentFactory = () => SwaggerModule.createDocument(app, configSwwager);
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(port);


}
bootstrap();
