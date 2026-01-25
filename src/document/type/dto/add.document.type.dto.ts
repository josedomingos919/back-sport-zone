import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddDocumentTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
