import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CartDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  multa: number;

  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsString()
  hasMulta: string;

  @Transform(({ value }) => (value ? Number(value) : null))
  @IsOptional()
  monthsId: number;

  @Transform(({ value }) => (value ? Number(value) : null))
  @IsOptional()
  disciplineId: number;

  @IsOptional()
  @IsString()
  reference: string;

  @Transform(({ value }) => (value ? Number(value) : null))
  @IsOptional()
  documentRequestId: number;
}
