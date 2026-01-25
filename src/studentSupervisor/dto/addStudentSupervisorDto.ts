import { Transform } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class AddStudentSupervisorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  bi: string;

  @IsString()
  @IsOptional()
  degree: string;

  @IsString()
  @IsOptional()
  phone1: string;

  @IsString()
  @IsOptional()
  phone2: string;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsOptional()
  statusId: number;
}
