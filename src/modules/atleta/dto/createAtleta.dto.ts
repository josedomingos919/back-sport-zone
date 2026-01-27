import {
  IsDate,
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateAtletaDto {
  @IsDate()
  @Type(() => Date)
  nascimento: Date;

  @IsString()
  @IsNotEmpty()
  posicao: string;

  @IsBoolean()
  publico: boolean;

  @IsString()
  @IsOptional()
  foto?: string; // Base64

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  equipaId: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
