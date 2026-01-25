import { Transform } from 'class-transformer';
import { IsOptional, IsInt, IsString } from 'class-validator';

export class GetAllSchoolYearDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsOptional()
  @IsInt()
  page: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsInt()
  @IsOptional()
  size: number;

  @IsString()
  @IsOptional()
  year: string;
}
