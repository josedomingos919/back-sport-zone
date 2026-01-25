import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDocumentRequestDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  documentTypeId: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  studentId: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  registrationId: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
