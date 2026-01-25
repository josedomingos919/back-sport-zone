import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  access: string;
}
