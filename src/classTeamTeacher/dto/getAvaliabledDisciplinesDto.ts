import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class GetAvaliabledDisciplinesDto {
  @IsNotEmpty()
  @Transform((item) => Number(item.value))
  classTeamId: number;
}
