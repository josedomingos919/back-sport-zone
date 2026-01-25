import { Module } from '@nestjs/common';
import { SchoolFeesService } from './schoolFees.service';
import { SchoolFeesController } from './schoolFees.controller';

@Module({
  controllers: [SchoolFeesController],
  providers: [SchoolFeesService],
})
export class SchoolFeesModule {}
