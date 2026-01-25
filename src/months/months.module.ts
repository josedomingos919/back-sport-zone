import { Module } from '@nestjs/common';
import { MonthsController } from './months.controller';
import { MonthsService } from './months.service';

@Module({
  controllers: [MonthsController],
  providers: [MonthsService],
})
export class MonthsModule {}
