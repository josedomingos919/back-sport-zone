import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClassTeamsTeacherService } from './classTeamTeacher.service';
import { AddClassTeamTeacherDto, UpdateClassTeamTeacherDto } from './dto';
import { GetAvaliabledDisciplinesDto } from './dto/getAvaliabledDisciplinesDto';

@Controller('class-team-teacher')
export class ClassTeamTeacherController {
  constructor(private classTeamTeacherService: ClassTeamsTeacherService) {}

  @Get('/search')
  search(@Query('keyword') keyword: string) {
    return this.classTeamTeacherService.search(keyword);
  }

  @Get('/avaliable-diciplines')
  getAvaliabledDisciplines(@Query() queryParams: GetAvaliabledDisciplinesDto) {
    return this.classTeamTeacherService.getAvaliabledDisciplines(queryParams);
  }

  @Get('/:classTeamId')
  get(@Param('classTeamId', ParseIntPipe) classTeamId: number) {
    return this.classTeamTeacherService.get(classTeamId);
  }

  @Post()
  add(@Body() data: AddClassTeamTeacherDto) {
    return this.classTeamTeacherService.add(data);
  }

  @Put()
  update(@Body() data: UpdateClassTeamTeacherDto) {
    return this.classTeamTeacherService.update(data);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.classTeamTeacherService.remove(id);
  }
}
