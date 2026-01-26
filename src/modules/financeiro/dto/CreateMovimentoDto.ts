import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { TipoMovimento } from 'src/helpers/enums';

export class CreateMovimentoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString())
  data: Date;

  @IsEnum(TipoMovimento, {
    message: `tipo must be either 'Entrada' or 'Saída'`,
  })
  tipo: 'Entrada' | 'Saída';
}
