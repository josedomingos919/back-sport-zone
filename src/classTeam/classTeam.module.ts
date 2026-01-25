import { Module } from '@nestjs/common';
import { ClassTeamService } from './classTeam.service';
import { ClassTeamController } from './classTeam.controller';

@Module({
  controllers: [ClassTeamController],
  providers: [ClassTeamService],
})
export class ClassTeamModule {}
