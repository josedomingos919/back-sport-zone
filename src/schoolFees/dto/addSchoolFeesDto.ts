import { IsNotEmpty } from 'class-validator';

export class AddSchoolFeesDto {
  @IsNotEmpty()
  paymentId: number;

  @IsNotEmpty()
  monthsId: number;

  @IsNotEmpty()
  schoolFine: string;
}
