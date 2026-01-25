import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DiscountsInUseService } from './discounts-in-use.service';
import { AddDiscountsInUseDto } from './dto/addDiscountsInUseDto';
import { UpdateDiscountsInUseDto } from './dto/updateDiscountsInUseDto';

@Controller('discounts-In-Use')
export class DiscountsInUseController {
  constructor(private discountsInUseService: DiscountsInUseService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addStudentSupervisor(@Body() dto: AddDiscountsInUseDto) {
    return this.discountsInUseService.add(dto);
  }

  @Get()
  getAll() {
    return this.discountsInUseService.getAllStudentSupervisor();
  }

  @Get('/:studentSupervisorId')
  getByStudentSupervisorId(@Param('studentSupervisorId', ParseIntPipe) countryId: number) {
    return this.discountsInUseService.getByStudentSupervisorId(countryId);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateMonth(@Body() dto: UpdateDiscountsInUseDto) {
    return this.discountsInUseService.update(dto);
  }

  @Delete('/:id')
  getByCountryId(@Param('id', ParseIntPipe) id: number) {
    return this.discountsInUseService.remove(id);
  }
}
