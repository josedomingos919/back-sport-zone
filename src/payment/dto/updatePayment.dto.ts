import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdatePaymentDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Transform(({ value }) => Number.parseFloat(value))
  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  statusId: number;

  @IsNotEmpty()
  employeeId: number;

  @IsNotEmpty()
  registrationId: number;

  @IsNotEmpty()
  type: string;
}
