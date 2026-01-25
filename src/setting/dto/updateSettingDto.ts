import { IsNotEmpty } from 'class-validator';

export class UpdateSettingDto {
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: string;
}
