import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDTO{

    @ApiProperty()
    @IsString()
    userPass:string

    @ApiProperty()
    @IsString()
    userEmail:string

    // @ApiProperty()
    // @IsString()
    // firstName:string
}