import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Param,
  Query,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AddStudentDto, GetAllStudentDto, UpdateStudentDto } from './dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  add(@Body() dto: AddStudentDto) {
    return this.studentService.addStudent(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateStudentDto) {
    return this.studentService.updateStudent(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.removeStudent(id);
  }

  @Get('search/:keword')
  search(@Param('keword') keword: string) {
    return this.studentService.search(keword);
  }

  @Get()
  getAll(@Query() queryParams: GetAllStudentDto) {
    return this.studentService.getAllStudents(queryParams);
  }

  @Get('autocomplete/:search')
  autocomplete(@Param('search') search: string) {
    return this.studentService.autocomplete(search);
  }

  @Get('all/:classteamId')
  getAllByClassTeam(@Param('classteamId', ParseIntPipe) classteamId: number) {
    return this.studentService.getAllStudentsByClassTeam({ classteamId });
  }
}
