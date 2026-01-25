import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class AddClassTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @IsNotEmpty()
  classId: number;

  @IsNotEmpty()
  @IsString()
  period: string;

  @IsInt()
  @IsNotEmpty()
  statusId: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  courseId: number;

  @IsInt()
  @IsNotEmpty()
  classroomId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsNumber()
  schoolYearId: number;

  // @IsArray()
  // @IsInt({ each: true })
  // @IsNotEmpty({ each: true })
  // disciplines: number[];
}
