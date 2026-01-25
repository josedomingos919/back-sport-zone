import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class AddCurriculumGridDto {
  @IsNumber()
  @IsNotEmpty()
  classId: number;

  @IsOptional()
  @IsNumber()
  courseId: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty({ each: true })
  disciplines: number[];
}
