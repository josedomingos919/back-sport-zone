import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateTreinoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsDateString()
  @IsNotEmpty()
  data: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  duracaoMin: number;

  @IsString()
  @IsNotEmpty()
  local: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  equipaId: number;
}
