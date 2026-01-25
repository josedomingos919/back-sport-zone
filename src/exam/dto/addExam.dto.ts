/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";


export class AddExamDto {
    @IsNotEmpty()
    paymentId: number;

    @IsNotEmpty()
    disciplineId: number;


}