import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddScheduleDto } from './dto/addScheduleDto';
import { ScheduleService } from './schedule.service';
import { UpdateScheduleDto } from './dto/updateScheduleDto';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  add(@Body() dto: AddScheduleDto) {
    return this.scheduleService.add(dto);
  }

  @Put()
  update(@Body() dto: UpdateScheduleDto) {
    return this.scheduleService.update(dto);
  }

  @Get('/:classTeamId')
  getAll(@Param('classTeamId', ParseIntPipe) classTeamId: number) {
    return this.scheduleService.get(classTeamId);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scheduleService.remove(id);
  }
}
