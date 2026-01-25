import { Module } from '@nestjs/common';
import { MedicalRecorController } from './medical-record.controller';
import { MedicalRecorService } from './medical-record.service';

@Module({
  controllers: [MedicalRecorController],
  providers: [MedicalRecorService],
})
export class  MedicalRecorModule {}
