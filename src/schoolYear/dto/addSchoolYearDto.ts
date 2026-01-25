import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddSchoolYearDto {
  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  description: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  statusId: number
}
