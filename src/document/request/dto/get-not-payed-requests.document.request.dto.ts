import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetNotPayedRequestsDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  studentId: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  registrationId: number;
}
