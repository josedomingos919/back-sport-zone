import { IsOptional, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  bi: string;

  @IsNumber()
  @IsOptional()
  salary: number;

  @IsString()
  @IsOptional()
  salaryType: string;

  @IsString()
  @IsOptional()
  birthDay: string;

  @IsString()
  @IsOptional()
  civilState: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  phone1: string;

  @IsString()
  @IsOptional()
  phone2: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsNumber()
  @IsOptional()
  countryId: number;

  @IsNumber()
  @IsOptional()
  provinceId: number;

  @IsNumber()
  @IsOptional()
  statusId: number;

  @IsNumber()
  @IsOptional()
  officeId: number;
}
