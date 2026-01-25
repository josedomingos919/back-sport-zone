import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateDisciplineDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
