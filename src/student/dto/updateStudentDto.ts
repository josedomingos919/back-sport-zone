import { IsOptional, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  bi: string;

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
