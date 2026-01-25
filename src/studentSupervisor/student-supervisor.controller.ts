import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { StudentSupervisorService } from './student-supervisor.service';
import { AddStudentSupervisorDto } from './dto/addStudentSupervisorDto';
import { UpdateStudentSupervisorDto } from './dto/updateStudentSupervisorDto';
import { GetAllStudentSupervisorDto } from './dto/get-all.student-supervisor.request.dto';

@Controller('student-supervisor')
export class StudentSupervisorController {
  constructor(private studentSupervisorService: StudentSupervisorService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addStudentSupervisor(@Body() dto: AddStudentSupervisorDto) {
    return this.studentSupervisorService.add(dto);
  }

  @Get('all')
  getAll(@Query() dto: GetAllStudentSupervisorDto) {
    return this.studentSupervisorService.getAll(dto);
  }

  @Get('/:studentSupervisorId')
  getByStudentSupervisorId(
    @Param('studentSupervisorId', ParseIntPipe) countryId: number,
  ) {
    return this.studentSupervisorService.getByStudentSupervisorId(countryId);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateMonth(@Body() dto: UpdateStudentSupervisorDto) {
    return this.studentSupervisorService.update(dto);
  }

  @Delete('/:id')
  getByCountryId(@Param('id', ParseIntPipe) id: number) {
    return this.studentSupervisorService.remove(id);
  }
}
