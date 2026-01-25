import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Delete,
  Put,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { MonthsService } from './months.service';
import { AddMonthDto } from './dto/addMonthDto';
import { UpdateMonthDto } from './dto/updateMonthDto';

@Controller('months')
export class MonthsController {
  constructor(private monthsService: MonthsService) {}

  @Get('all')
  getAll() {
    return this.monthsService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  addMonth(@Body() dto: AddMonthDto) {
    return this.monthsService.addMonth(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateMonth(@Body() dto: UpdateMonthDto) {
    return this.monthsService.update(dto);
  }

  @Get('/:schoolYearId')
  getMonths(@Param('schoolYearId', ParseIntPipe) schoolYearId: number) {
    return this.monthsService.getMonths(schoolYearId);
  }

  @Delete('/:id')
  removeMonth(@Param('id', ParseIntPipe) id: number) {
    return this.monthsService.removeMonth(id);
  }
}
