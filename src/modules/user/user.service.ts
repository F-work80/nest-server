import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt"

import {CreateUserDTO, DelUserDTO, UpdateUserDTO} from "./dto";
import {where} from "sequelize";


@Injectable()
export class UserService {
    constructor(@InjectModel (User) private readonly userReposytiry:typeof User) {  }

    async hashPass(pass:string){

        return bcrypt.hash( pass,10)
    }
    async  findUserByEmail(email:string){
        return  this.userReposytiry.findOne({where:{
            userEmail:email
            }})
    }

    async createUser(dto: CreateUserDTO):Promise <CreateUserDTO> {

        dto.userPass=await  this.hashPass(dto.userPass)
        await  this.userReposytiry.create({
            firstName:dto.firstName,
            userName:dto.userName,
            userPass:dto.userPass,
            userEmail:dto.userEmail
        })


        return dto
    }

    async updateUser(email:string,dto:UpdateUserDTO):Promise<UpdateUserDTO>{
        await  this.userReposytiry.update(dto,{where:{userEmail: email }})
        return dto

    }

    async delUser(email:string):Promise<boolean>{
        this.userReposytiry.destroy({where:{
            userEmail:email
            }})
        return true
    }
    async publicUser(email:string){

        const res = await this.userReposytiry.findOne({where:{
                    userEmail:email,
                // attributes:{exclude:['userEmail']}

            }})
// console.log(res)

        return res
    }
}
