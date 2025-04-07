 import { Injectable } from '@nestjs/common';
 import {JwtService} from "@nestjs/jwt";
 import {User} from "../user/models/user.model";
 import {ConfigService} from "@nestjs/config";


@Injectable()
export class TokenService {
    constructor(private readonly jwtService:JwtService,
                private readonly configService:ConfigService,
                ) {  }

    async genJwtToken(email){
        const payload={email}

        return this.jwtService.sign(payload,{
            secret: this.configService.get('jwt.secret'),
            expiresIn: this.configService.get('jwt.time')

        })
    }
}
