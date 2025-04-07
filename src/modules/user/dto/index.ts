import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export  class CreateUserDTO{
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
    userPass:string;

}
export class DelUserDTO{
    @ApiProperty()
    @IsString()
    userEmail:string;
}
export  class UpdateUserDTO{
    @ApiProperty()
    @IsString()
    firstName:string

    @ApiProperty()
    @IsString()
    userName:string

    @ApiProperty()
    @IsString()
    userEmail:string

    // @ApiProperty()
    // @IsString()
    // userPass:string
}