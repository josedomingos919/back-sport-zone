import { IsArray, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { CartDto } from './cartDto';
import { PaymentMethodDto } from './paymentMethod';

export class AddPaymentDto {
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  subTotal: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  valorDado: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  descontoSaldo: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  troco: number;

  @IsNotEmpty()
  @IsInt()
  registrationId: number;

  @IsNotEmpty()
  @IsInt()
  employeeId: number;

  @IsNotEmpty()
  @IsInt()
  studentId: number;

  @IsArray()
  @IsNotEmpty()
  cart: CartDto[];

  // Payment method
  @IsNotEmpty()
  paymentMethod: PaymentMethodDto[];
}
