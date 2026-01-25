import { IsNotEmpty, IsString, IsArray, IsInt } from 'class-validator';

export class UpdateTeacherDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  employeeId: number;

  @IsInt()
  @IsNotEmpty()
  statusId: number;

  @IsArray()
  @IsInt({ each: true })
  @IsNotEmpty({ each: true })
  teacherDisciplines: number[];

  @IsString()
  @IsNotEmpty()
  academicLevel: string;
}
