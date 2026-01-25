import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddDocumentCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
