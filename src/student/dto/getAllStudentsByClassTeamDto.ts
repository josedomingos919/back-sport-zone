import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetAllStudentsByClassTeamDto {
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  classteamId: number;
}
