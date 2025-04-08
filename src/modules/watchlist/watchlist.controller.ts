import {Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards} from '@nestjs/common';
import {WatchlistService} from "./watchlist.service";
import {WatchListDTO} from "./dto";
import {JwtAuthGuard} from "../../guards/jwt-guard";
import {WatchListResponse} from "./responce";
import {ApiResponse, ApiTags} from "@nestjs/swagger";


@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService:WatchlistService) { }

    @ApiTags('api')
    @ApiResponse({
        status:201,
        type:WatchListResponse
    })
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDTO:WatchListDTO,@Req() request):Promise<WatchListResponse>{
        const user=assetDTO.user
        // console.log(user)
        return this.watchlistService.createAsset(user,assetDTO)
    }

    @ApiTags('api')
    @ApiResponse({
        status:200,
        type:Boolean
    })
    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteAsset(@Query('id') assetId:string, @Query('user') userId:string):Promise<boolean>{

        return  this.watchlistService.delAsset(userId,assetId)

    }

}
