import { Transform } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class AddInvoicePaymentDiscountsDto {

  @IsInt()
  @IsNotEmpty()
  paymentId: number;

  @IsInt()
  @IsNotEmpty()
  paymentDiscountId: number;

  @IsString()
  @IsNotEmpty()
  discountName: string;

  @IsString()
  @IsNotEmpty()
  discountType: string;

  @IsNumber()
  @IsOptional()
  percentage: number;

  @IsNumber()
  @IsOptional()
  value: number;

  @IsNumber()
  @IsOptional()
  total: number;

}
