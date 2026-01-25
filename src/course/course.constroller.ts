import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { AddCourseDto, UpdateCourseDto } from './dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  add(@Body() dto: AddCourseDto) {
    return this.courseService.addCourse(dto);
  }

  @Put()
  update(@Body() dto: UpdateCourseDto) {
    return this.courseService.update(dto);
  }

  @Get('all')
  getAll() {
    return this.courseService.getAllCourses();
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.remove(id);
  }
}
