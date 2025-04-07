import {Column, Model, Table} from "sequelize-typescript";
import {IsString} from "class-validator";
import {Exclude} from "class-transformer";

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

// @Column
//     list:string;
}

