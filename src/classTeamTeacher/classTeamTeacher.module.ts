import { Module } from '@nestjs/common';
import { ClassTeamsTeacherService } from './classTeamTeacher.service';
import { ClassTeamTeacherController } from './classTeamTeacher.controller';

@Module({
  providers: [ClassTeamsTeacherService],
  controllers: [ClassTeamTeacherController],
})
export class ClassTeamsTeacherModule {}
