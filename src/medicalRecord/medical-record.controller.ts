import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MedicalRecorService } from './medical-record.service';
import { AddMedicalRecordDto } from './dto/addMedicalRecordDto';
import { UpdateMedicalRecordDto } from './dto/updateMedicalRecordDto';

@Controller('medical-Recor')
export class MedicalRecorController {
  constructor(private medicalRecorService: MedicalRecorService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addStudentSupervisor(@Body() dto: AddMedicalRecordDto) {
    return this.medicalRecorService.add(dto);
  }

  @Get()
  getAll() {
    return this.medicalRecorService.getAllMedicalRecord();
  }

  @Get('/:medicalRecorId')
  getByStudentSupervisorId(@Param('mcedicalRecorId', ParseIntPipe) mcedicalRecorId: number) {
    return this.medicalRecorService.getByMedicalRecordId(mcedicalRecorId);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateMonth(@Body() dto: UpdateMedicalRecordDto) {
    return this.medicalRecorService.update(dto);
  }

  @Delete('/:id')
  getByCountryId(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecorService.remove(id);
  }
}
