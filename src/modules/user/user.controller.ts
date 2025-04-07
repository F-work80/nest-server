import {Body, Controller, Delete, Patch, Post, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDTO, DelUserDTO, UpdateUserDTO} from "./dto";
import {JwtAuthGuard} from "../../guards/jwt-guard";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import * as string_decoder from "node:string_decoder";

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {    }


   // @Post('createUser')
   //  createUsers(@Body() dto:CreateUserDTO) {
   //      return this.userService.createUser(dto)
   // }
   @ApiTags('api')
   @ApiResponse({status:200,type:CreateUserDTO})
   @UseGuards(JwtAuthGuard)
   @Patch()
   updateusers(@Body()updateDTO:UpdateUserDTO,@Req() request):Promise<UpdateUserDTO>{
        const user=request.body
       return this.userService.updateUser(user.userEmail,updateDTO)
       // console.log(user)
   }

   @ApiTags('api')
   @ApiResponse({status:201})
   @UseGuards(JwtAuthGuard)
   @Delete('delUser')
    deleteUser(@Req() request):Promise<boolean>{
        return this.userService.delUser(request.body.userEmail)
   }

}


