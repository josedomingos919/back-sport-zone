import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class AddPaymentDto {
  @Transform(({ value }) => Number.parseFloat(value))
  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  @IsInt()
  statusId: number;

  @IsNotEmpty()
  @IsInt()
  employeeId: number;

  @IsNotEmpty()
  @IsInt()
  registrationId: number;

  @IsNotEmpty()
  type: string;
}
