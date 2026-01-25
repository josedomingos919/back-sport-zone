import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber,
  IsInt,
} from 'class-validator';

export class UpdateClassDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  // @IsArray()
  // @IsNumber({}, { each: true })
  // @IsNotEmpty({ each: true })
  // disciplines: number[];
}
