import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {WatchList} from "./models/watclist.model";
import {WatchListResponse} from "./responce";

@Injectable()
export class WatchlistService {
    constructor(@InjectModel(WatchList) private readonly watchListReposytory:typeof WatchList) {}


    async createAsset(user,dto):Promise<WatchListResponse>{

        const watchList = {
            user:user,
            name:dto.name,
            assetId:dto.assetId
        }
        // console.log(watchList)
        await this.watchListReposytory.create(watchList)
        return watchList
    }

    async  delAsset(userId:string,assetId:string):Promise<boolean>{
    const res= await  this.watchListReposytory.destroy({
        where:{
            id:assetId,
            user:userId
        }
    })
        console.log(res)
        if(!res)return false
        return true

    }
}
