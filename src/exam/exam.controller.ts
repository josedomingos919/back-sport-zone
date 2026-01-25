/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Put } from '@nestjs/common';
import { ExamService } from './exam.service';
import { AddExamDto, UpdateExamDto } from './dto';

@Controller('exam')
export class ExamController {
  constructor(private examService: ExamService) { }

  @Post()
  add(@Body() dto: AddExamDto) {
    return this.examService.add(dto);
  }

  @Put()
  update(@Body() dto: UpdateExamDto) {
    return this.examService.update(dto);
  }
}

