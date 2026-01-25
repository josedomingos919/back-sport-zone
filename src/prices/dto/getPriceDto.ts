import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class GetPriceDto {
  @IsNotEmpty()
  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  classId: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  schoolYearId: number;

  @IsOptional()
  @Transform(({ value }) => (value ? Number.parseInt(value) : value))
  courseId: number;
}
