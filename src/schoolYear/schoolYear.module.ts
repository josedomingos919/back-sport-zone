import { Module } from '@nestjs/common';
import { SchoolYearController } from './schoolYear.controller';
import { SchoolYearService } from './schoolYear.service';

@Module({
  controllers: [SchoolYearController],
  providers: [SchoolYearService],
})
export class SchoolYearModule {}
