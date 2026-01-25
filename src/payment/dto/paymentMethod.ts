import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PaymentMethodDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  paymentMethodId: number;

  @IsString()
  @IsOptional()
  ibanRemitent: string;

  @IsString()
  @IsOptional()
  transactionNumber: string;

  @IsString()
  @IsOptional()
  date: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  bankAccountId: number;
}
