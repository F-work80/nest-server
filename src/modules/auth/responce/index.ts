import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class AuthUserResponse{
    @ApiProperty()
    @IsString()
    firstName:string;

    @ApiProperty()
    @IsString()
    userName:string;

    @ApiProperty()
    @IsString()
    userEmail:string;

    @ApiProperty()
    @IsString()
    // @Exclude()
    userPass:string;

    @ApiProperty()
    @IsString()
    token:string;
}