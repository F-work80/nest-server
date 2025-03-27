import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {ConfigService} from "@nestjs/config";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService=app.get(ConfigService)
  const port = configService.get('port')

  // const db_name=String(configService.get('db.pass'))
  // console.log(db_name)

  await app.listen(port);


}
bootstrap();
