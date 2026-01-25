import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsInt,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateClassroomDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  studentNumber: number;
}
