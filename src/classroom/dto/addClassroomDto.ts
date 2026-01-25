import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class AddClassroomDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @Transform(({ value }) => Number.parseInt(value))
  @IsNotEmpty()
  @IsInt()
  studentNumber: number;
}
