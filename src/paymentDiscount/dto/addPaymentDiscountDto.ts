import { Transform } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  isNumber,
  IsInt,
} from 'class-validator';

export class AddPaymentDiscountDto {

  @IsInt()
  @IsOptional()
  value: number;

  @IsNumber()
  @IsOptional()
  percentage:number

  @IsString()
  @IsOptional()
  discountType: string;

  @IsString()
  @IsOptional()
  paymentType: string;

  @IsNotEmpty()
  @IsInt()
  statusId: number;

}
