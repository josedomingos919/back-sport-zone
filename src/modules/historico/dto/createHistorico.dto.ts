import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateHistoricoDto {
  @Transform(({ value }) =>
    value !== null && value !== undefined ? parseInt(value) : undefined,
  )
  @IsOptional()
  @IsInt()
  @Min(0)
  minutos?: number;

  @Transform(({ value }) =>
    value !== null && value !== undefined ? parseInt(value) : undefined,
  )
  @IsOptional()
  @IsInt()
  @Min(0)
  gols?: number;

  @Transform(({ value }) =>
    value !== null && value !== undefined ? parseInt(value) : undefined,
  )
  @IsOptional()
  @IsInt()
  @Min(0)
  assistencias?: number;

  @Transform(({ value }) =>
    value !== null && value !== undefined ? parseInt(value) : undefined,
  )
  @IsOptional()
  @IsInt()
  @Min(0)
  faltas?: number;

  @Transform(({ value }) =>
    value !== null && value !== undefined ? parseInt(value) : undefined,
  )
  @IsOptional()
  @IsInt()
  @Min(0)
  avaliacaoStar?: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  jogoId: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  atletaId: number;
}
