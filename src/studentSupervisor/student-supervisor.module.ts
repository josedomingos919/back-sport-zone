import { Module } from '@nestjs/common';
import { StudentSupervisorController } from './student-supervisor.controller';
import { StudentSupervisorService } from './student-supervisor.service';

@Module({
  controllers: [StudentSupervisorController],
  providers: [StudentSupervisorService],
})
export class StudentSupervisorModule {}
