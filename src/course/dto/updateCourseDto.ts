import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsArray,
  IsNumber,
} from 'class-validator';

export class UpdateCourseDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  // @IsArray()
  // @IsNumber({}, { each: true })
  // @IsNotEmpty({ each: true })
  // disciplines: number[];
}
