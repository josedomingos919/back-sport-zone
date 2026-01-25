import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AddEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  bi: string;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsString()
  @IsNotEmpty()
  salaryType: string;

  @IsString()
  birthDay: string;

  @IsString()
  civilState: string;

  @IsString()
  gender: string;

  @IsString()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone1: string;

  @IsString()
  phone2: string;

  @IsString()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  countryId: number;

  @IsNumber()
  @IsNotEmpty()
  provinceId: number;

  @IsNumber()
  @IsNotEmpty()
  statusId: number;

  @IsNumber()
  @IsNotEmpty()
  officeId: number;
}
