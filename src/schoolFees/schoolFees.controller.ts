import { Body, Controller, Post } from '@nestjs/common';
import { SchoolFeesService } from './schoolFees.service';
import { AddSchoolFeesDto } from './dto';

@Controller('school-fees')
export class SchoolFeesController {
  constructor(private schoolFeesService: SchoolFeesService) {}

  @Post()
  add(@Body() dto: AddSchoolFeesDto) {
    return this.schoolFeesService.add(dto);
  }
}
