import {Body, ClassSerializerInterceptor, Controller, Post, UseGuards, UseInterceptors} from '@nestjs/common';
import {CreateUserDTO} from "../user/dto";
import {AuthService} from "./auth.service";
import {LoginUserDTO} from "./dto";
import {AuthUserResponse} from "./responce";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../guards/jwt-guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @ApiTags('api')
    @ApiResponse({
        status:201,
        type:CreateUserDTO,
    })
    @Post('registerUser')
    regUsers(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.regUser(dto)
    }

    @ApiTags('api')
    @ApiResponse({
        status:200,
        type:AuthUserResponse
    })

    // @UseInterceptors(ClassSerializerInterceptor)
    @Post('login')
    loginUser(@Body()dto:LoginUserDTO):Promise<any>{
        return this.authService.loginUser(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('test')
    test(){
        return true
    }
}
