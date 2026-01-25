/* eslint-disable prettier/prettier */
import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

export class UpdateExamDto {

    @Transform(({value}) => Number.parseInt(value)) 
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    paymentId: number;

    @IsNotEmpty()
    disciplineId: number;


}