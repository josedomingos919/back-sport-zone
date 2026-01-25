import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDiscountsInUseDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsOptional()
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  studentSupervisorId: number;

  @IsNumber()
  @IsNotEmpty()
  paymentDiscountId: number;

  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
