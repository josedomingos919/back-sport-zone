import { Transform } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class GetCurriculumGridDto {
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  classId: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  courseId: number;
}
