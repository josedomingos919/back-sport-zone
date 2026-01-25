import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateStudentSupervisorDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  bi: string;

  @IsString()
  @IsOptional()
  degree: string;

  @IsString()
  @IsOptional()
  phone1: string;

  @IsString()
  @IsOptional()
  phone2: string;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsOptional()
  statusId: number;
}
