import { Controller, Get, Query } from '@nestjs/common';
import { PropinaService } from './propina.service';
import { GetPropinaDto } from './dto/getPropinaDto';
import { GetStudentsDto } from './dto/getStudentsDto';

@Controller('propina')
export class PropinaController {
  constructor(private provinceService: PropinaService) {}

  @Get('classteam')
  getClassTeam(@Query() queryParams: GetPropinaDto) {
    return this.provinceService.getClassTeam(queryParams);
  }

  @Get('getStudents')
  getStudents(@Query() queryParams: GetStudentsDto) {
    return this.provinceService.getStudents(queryParams);
  }
}
