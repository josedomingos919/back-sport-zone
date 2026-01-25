import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class AddStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  bi: string;

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

  @IsString()
  @IsOptional()
  parentAffiliation: string;

  @IsString()
  @IsOptional()
  maternalAffiliation: string;

  @IsString()
  @IsOptional()
  residence: string;

  @IsString()
  @IsOptional()
  municipality: string;

  @IsString()
  @IsOptional()
  natural: string;

  @IsString()
  @IsOptional()
  emitOn: string;

  @IsString()
  @IsOptional()
  validUntil: string;

  @IsString()
  @IsOptional()
  isWorking: string;

  @IsString()
  @IsOptional()
  work: string;

  @IsString()
  @IsOptional()
  workStation: string;

  @IsString()
  @IsOptional()
  sponsorOfEducation: string;
}
