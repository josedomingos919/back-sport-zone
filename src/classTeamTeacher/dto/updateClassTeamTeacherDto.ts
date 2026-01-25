import { IsNotEmpty, IsInt } from 'class-validator';

export class UpdateClassTeamTeacherDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

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
