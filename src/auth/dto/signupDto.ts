import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  access: string;

  @IsNumber()
  @IsNotEmpty()
  employeeId: number;

  @IsNumber()
  @IsNotEmpty()
  statusId: number;
}
