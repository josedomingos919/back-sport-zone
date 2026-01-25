import { IsString, IsNotEmpty } from 'class-validator';

export class AddDisciplineDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
