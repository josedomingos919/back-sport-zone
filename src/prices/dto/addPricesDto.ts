import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  ValidateIf,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class AddPricesDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  classId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  schoolYearId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @ValidateIf(({ courseId }) => courseId)
  @IsInt()
  courseId: number;

  @Transform(({ value }) => Number.parseFloat(value))
  @IsNotEmpty()
  @IsNumber()
  registrationPrice: number;

  @Transform(({ value }) => Number.parseFloat(value))
  @IsNotEmpty()
  @IsNumber()
  reregistrationPrice: number;

  @Transform(({ value }) => Number.parseFloat(value))
  @IsNotEmpty()
  @IsNumber()
  monthPrice: number;

  @Transform(({ value }) => Number.parseFloat(value))
  @IsNotEmpty()
  @IsNumber()
  registrationMulta: number;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  @IsNumber()
  examePrice: number;
}
