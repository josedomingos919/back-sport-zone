import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePaymentDiscountDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

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
