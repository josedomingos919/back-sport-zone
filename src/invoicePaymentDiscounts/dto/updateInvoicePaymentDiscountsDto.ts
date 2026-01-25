import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateInvoicePaymentDiscountsDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

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
