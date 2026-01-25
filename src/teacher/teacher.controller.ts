import {
  Controller,
  Post,
  Put,
  Body,
  HttpCode,
  Get,
  Query,
  HttpStatus,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { GetAllEmployeeDto } from '../employee/dto';
import { UpdateTeacherDto } from './dto';
import { AddTeacherDto } from './dto/addTeacherDto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  add(@Body() dto: AddTeacherDto) {
    return this.teacherService.addTeacher(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateTeacherDto) {
    return this.teacherService.updateTeacher(dto);
  }

  @Get()
  getAll(@Query() dto: GetAllEmployeeDto) {
    return this.teacherService.getAllTeacher(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teacherService.removeTeacher(id);
  }

  @Get('test')
  getTest() {
    return 'Teste';
  }
}
