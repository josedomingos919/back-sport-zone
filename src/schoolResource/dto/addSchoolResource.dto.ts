/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class AddSchoolResourceDto {
    @IsNotEmpty()
    paymentId: number;
    
    @IsNotEmpty()
    disciplineId: number;
}