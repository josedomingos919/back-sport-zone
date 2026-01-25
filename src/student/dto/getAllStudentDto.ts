import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetAllStudentDto {
  @IsString()
  @IsOptional()
  name: string;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  classteamId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  page: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  size: number;
}
