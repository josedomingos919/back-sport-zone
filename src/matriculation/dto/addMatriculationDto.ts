import { Transform } from 'class-transformer';
import {
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class AddMatriculationDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsNumber()
  schoolYearId: number;

  @IsInt()
  @IsOptional()
  courseId: number;

  @IsString()
  @IsOptional()
  previousClass: string;

  @IsString()
  @IsOptional()
  previousGroup: string;

  @IsString()
  @IsOptional()
  previousRoom: string;

  @IsString()
  @IsOptional()
  previousNumber: string;

  @IsString()
  @IsOptional()
  previousSchoolsName: string;
  
  @IsInt()
  @IsNotEmpty()
  classId: number;

  @IsInt()
  @IsNotEmpty()
  classteamId: number;

  @IsInt()
  @IsNotEmpty()
  statusId: number;

  @IsInt()
  @IsNotEmpty()
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  cardPrice: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  @IsNotEmpty()
  employeeId: number;
}
