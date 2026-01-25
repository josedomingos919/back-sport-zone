import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetAllDocumentRequestDto {
  @IsString()
  @IsOptional()
  name: string;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  page: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  size: number;
}
