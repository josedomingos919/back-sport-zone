import { Transform } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class AddDiscountsInUseDto {

  @IsInt()
  @IsOptional()
  studentId: number;

  @IsInt()
  @IsNotEmpty()
  studentSupervisorId: number;

  @IsInt()
  @IsNotEmpty()
  paymentDiscountId: number;

  @IsInt()
  @IsNotEmpty()
  statusId: number;

}
