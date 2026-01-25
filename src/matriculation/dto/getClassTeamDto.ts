import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class GetClassTeamDto {
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
