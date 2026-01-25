import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateSchoolYearDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  description: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
