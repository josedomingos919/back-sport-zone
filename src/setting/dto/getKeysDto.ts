import { IsArray, IsString, IsNotEmpty } from 'class-validator';

export class GetKeysDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  keys: string[];
}
