import { IsNotEmpty, IsInt } from 'class-validator';

export class AddClassTeamTeacherDto {
  @IsNotEmpty()
  @IsInt()
  teacherId: number;

  @IsNotEmpty()
  @IsInt()
  disciplineId: number;

  @IsNotEmpty()
  @IsInt()
  classTeamId: number;
}
