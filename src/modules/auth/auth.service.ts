import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {CreateUserDTO} from "../user/dto";
import {AppError} from "../../common/constants/errors";
import {LoginUserDTO} from "./dto";
import * as bcrypt from 'bcrypt'
import {AuthUserResponse} from "./responce";
import {TokenService} from "../token/token.service";


@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService,
        private readonly tokenService:TokenService) { }

    async regUser(dto:CreateUserDTO):Promise<CreateUserDTO>{
        const existUser=await  this.userService.findUserByEmail(dto.userEmail)

        if(existUser)throw new BadRequestException(AppError.USER_EXIST)
        return this.userService.createUser(dto)
    }

    async loginUser(dto:LoginUserDTO):Promise<any>{

        const existUser= await this.userService.findUserByEmail(dto.userEmail)
        if(!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST)

        // console.log(existUser)

        const validPass= await bcrypt.compare(dto.userPass,existUser.dataValues.userPass)
        if(!validPass) throw new BadRequestException(AppError.WRONG_EMAIL_OR_PASS)

        // const userData={
        //     userName:existUser.dataValues.userName,
        //     userEmail:existUser.dataValues.userEmail
        // }
        const pubUser=await this.userService.publicUser(dto.userEmail)//
        const token=await this.tokenService.genJwtToken(pubUser)//userData

        // console.log(pubUser?.dataValues)
        const user = {pubUser,token}
        // console.log(res)

        return user


    }

}
