import { Body, Controller, Post, Put } from '@nestjs/common';
import { SchoolResourceService } from './school-resource.service';
import { AddSchoolResourceDto, UpdateSchoolResourceDto } from './dto';

@Controller('school-resource')
export class SchoolResourceController {
  constructor(private schoolResourceService: SchoolResourceService) {}

  @Post()
  add(@Body() dto: AddSchoolResourceDto) {
    return this.schoolResourceService.add(dto);
  }

  @Put()
  update(@Body() dto: UpdateSchoolResourceDto) {
    return this.schoolResourceService.update(dto);
  }
}
