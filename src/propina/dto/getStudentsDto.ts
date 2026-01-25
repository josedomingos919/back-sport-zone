import { Transform } from 'class-transformer';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class GetStudentsDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  classTeamId: number;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsNotEmpty()
  schoolYearId: number;
}
