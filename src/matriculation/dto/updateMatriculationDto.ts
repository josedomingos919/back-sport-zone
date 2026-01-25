import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMatriculationDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  studentId: number;

  @IsInt()
  @IsNotEmpty()
  statusId: number;

  @IsString()
  @IsOptional()
  previousClass: string;

  @IsString()
  @IsOptional()
  previousGroup: string;

  @IsString()
  @IsOptional()
  previousRoom: string;

  @IsString()
  @IsOptional()
  previousNumber: string;

  @IsString()
  @IsOptional()
  previousSchoolsName: string;
}
