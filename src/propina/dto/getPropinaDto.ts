import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class GetPropinaDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  schoolYearId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  classId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  courseId: number;
}
