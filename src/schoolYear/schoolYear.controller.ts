import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Delete,
  HttpCode,
  Param,
  HttpStatus,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { AddSchoolYearDto, UpdateSchoolYearDto } from './dto';
import { GetAllSchoolYearDto } from './dto/getAllSchoolYearDto';
import { SchoolYearService } from './schoolYear.service';

@Controller('school-year')
export class SchoolYearController {
  constructor(private schoolYearService: SchoolYearService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  add(@Body() dto: AddSchoolYearDto) {
    return this.schoolYearService.addSchoolYear(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateSchoolYearDto) {
    return this.schoolYearService.update(dto);
  }

  @Get('all')
  getAll(@Query() dto: GetAllSchoolYearDto) {
    return this.schoolYearService.getAllSchoolYears(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.schoolYearService.remove(id);
  }
}
