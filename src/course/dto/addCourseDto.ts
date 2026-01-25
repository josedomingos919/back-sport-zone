import { IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';

export class AddCourseDto {
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
