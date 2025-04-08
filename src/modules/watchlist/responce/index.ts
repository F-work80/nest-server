import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class WatchListResponse{

    @ApiProperty()
    @IsString()
    user:string

    @ApiProperty()
    @IsString()
    name:string

    @ApiProperty()
    @IsString()
    assetId:string
}