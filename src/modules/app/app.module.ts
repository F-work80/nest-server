import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "../user/user.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import  {SequelizeModule} from "@nestjs/sequelize";
import config from '../../configs'
import {User} from "../user/models/user.model";
import {AuthModule} from "../auth/auth.module";
import {TokenModule} from "../token/token.module";

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        }),
        SequelizeModule.forRootAsync(({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                dialect: 'postgres',
                host: configService.get('db.host'),
                username: configService.get('db.user'),
                database: configService.get('db.name'),
                password: configService.get('db.pass'),
                port: configService.get('db.port'),
                synchronize: true,
                autoLoadModels: true,
                models: [User]
            }),
        })),
        AuthModule,
        TokenModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
