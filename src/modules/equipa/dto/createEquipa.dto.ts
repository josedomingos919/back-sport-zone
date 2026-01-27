import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEquipaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  escalao: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  clubeId: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  treinadorId?: number;
}
