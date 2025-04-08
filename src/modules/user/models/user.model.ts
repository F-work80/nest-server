import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {IsString} from "class-validator";
import {Exclude} from "class-transformer";
import {WatchList} from "../../watchlist/models/watclist.model";

@Table
export class User extends Model {
@Column
firstName:string;

@Column
userName:string;

@Column
// @Exclude()
userPass:string;

@Column
userEmail:string;

@HasMany(()=>WatchList,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})
watchList:WatchList[];
}

